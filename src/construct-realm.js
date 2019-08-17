/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow strict-local */

import { Realm } from "./realm.js";
// import initializeRealm from "./initialize-realm.js";
import initializeSingletons from "./initialize-singletons.js";
import { initialize as initializeIntrinsics } from "./intrinsics/index.js";
import initializeGlobal from "./intrinsics/ecma262/global.js";
import type { RealmOptions } from "./options.js";
import * as evaluators from "./evaluators/index.js";
import { Environment } from "./singletons.js";
import { ObjectValue } from "./values/index.js";
import { RealmStatistics } from "./statistics.js";
  
export default function(opts: RealmOptions = {serialize: true}): Realm {
  initializeSingletons();

  let r = new Realm(opts, new RealmStatistics);
  let i = r.intrinsics;
  // initializeRealm(r);
  initializeIntrinsics(i, r);

  // TODO: Find a way to let different environments initialize their own global
  // object for special magic host objects such as the window object in the DOM.
  r.$GlobalObject = new ObjectValue(r, i.ObjectPrototype, "global");
  r.useAbstractInterpretation = false;
  initializeGlobal(r);

  for (let name in evaluators) r.evaluators[name] = evaluators[name];
  r.$GlobalEnv = Environment.NewGlobalEnvironment(r, r.$GlobalObject, r.$GlobalObject);
  return r;
}
