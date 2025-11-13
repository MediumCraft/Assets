/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.135.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  FrustumGeometry_default
} from "./chunk-JO7JNNA7.js";
import "./chunk-LH6ORW6K.js";
import "./chunk-GDRC42XB.js";
import "./chunk-BL2DZDVZ.js";
import "./chunk-7PEHRL25.js";
import "./chunk-XU2BSRKQ.js";
import "./chunk-7WJTEKRT.js";
import "./chunk-FXOLNMP4.js";
import "./chunk-LFDUI4AW.js";
import "./chunk-BU5UQP56.js";
import "./chunk-5O437JQW.js";
import "./chunk-L67GICVQ.js";
import "./chunk-CJHTP52Z.js";
import "./chunk-RAUQWQRB.js";
import "./chunk-X3F3GI34.js";
import "./chunk-O7QILKQD.js";
import {
  defined_default
} from "./chunk-3AOYYRRB.js";

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
