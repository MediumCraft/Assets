/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.134.1
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
} from "./chunk-GIFFHX4J.js";
import "./chunk-BJK22KTR.js";
import "./chunk-QI7IUAIC.js";
import "./chunk-3MD6ELKN.js";
import "./chunk-PVUFAOQX.js";
import "./chunk-XAKIJHQ7.js";
import "./chunk-CLA3KBXT.js";
import "./chunk-DNOQ22DJ.js";
import "./chunk-GN7NDGB5.js";
import "./chunk-D45VIGEV.js";
import "./chunk-OZBWVSA5.js";
import "./chunk-YGYL7X3Q.js";
import "./chunk-O2X2JK6G.js";
import {
  defined_default
} from "./chunk-OZLASBIH.js";

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
