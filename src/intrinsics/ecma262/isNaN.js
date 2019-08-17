/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow strict-local */

import type { Realm } from "../../realm.js";
import { NativeFunctionValue } from "../../values/index.js";
import { To } from "../../singletons.js";

export default function(realm: Realm): NativeFunctionValue {
  // ECMA262 18.2.3
  return new NativeFunctionValue(
    realm,
    "isNaN",
    "isNaN",
    1,
    (context, [number]) => {
      // 1. Let num be ? ToNumber(number).
      let num = To.ToNumber(realm, number);

      // 2. If num is NaN, return true.
      if (isNaN(num)) return realm.intrinsics.true;

      // 3. Otherwise, return false.
      return realm.intrinsics.false;
    },
    false
  );
}
