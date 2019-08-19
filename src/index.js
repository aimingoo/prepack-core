/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The module is simple load stub.
 */

/* @flow */

import { Realm } from "./realm.js";
import { ThrowCompletion } from "./completions.js";
import { PropertyDescriptor } from "./descriptors.js";
import construct_realm from "./construct-realm.js";
import initializeGlobals from "./intrinsics/prepack/global.js";
import initializeConsole from "./intrinsics/common/console.js";

function initializeGlobalProperties(realm: Realm): any {
  realm.$GlobalObject.$DefineOwnProperty(
      "console",
      new PropertyDescriptor({
        value: initializeConsole(realm),  // binding current console
        writable: true,
        enumerable: false,
        configurable: true,
      })
  );
}

let realm = construct_realm();
initializeGlobals(realm);
initializeGlobalProperties(realm);

export default function(code) {
  try {
    let res = realm.$GlobalEnv.execute(code, "library");
    if (res && res instanceof ThrowCompletion) {
      throw res.value;
    }
    // console.log(res.serialize()); // mute
  } catch (err) {
    console.error(err);
  }
}