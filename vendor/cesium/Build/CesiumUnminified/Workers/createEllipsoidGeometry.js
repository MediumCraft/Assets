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
  EllipsoidGeometry_default
} from "./chunk-DH6IKTS7.js";
import "./chunk-B5K52AQJ.js";
import "./chunk-BJK22KTR.js";
import "./chunk-JTRSO6FN.js";
import "./chunk-3MD6ELKN.js";
import "./chunk-IJ63WEE3.js";
import "./chunk-IW3HDLIX.js";
import "./chunk-OVA5IU5S.js";
import "./chunk-DNOQ22DJ.js";
import "./chunk-GN7NDGB5.js";
import "./chunk-D45VIGEV.js";
import "./chunk-OZBWVSA5.js";
import "./chunk-YGYL7X3Q.js";
import "./chunk-O2X2JK6G.js";
import {
  defined_default
} from "./chunk-OZLASBIH.js";

// packages/engine/Source/Workers/createEllipsoidGeometry.js
function createEllipsoidGeometry(ellipsoidGeometry, offset) {
  if (defined_default(offset)) {
    ellipsoidGeometry = EllipsoidGeometry_default.unpack(ellipsoidGeometry, offset);
  }
  return EllipsoidGeometry_default.createGeometry(ellipsoidGeometry);
}
var createEllipsoidGeometry_default = createEllipsoidGeometry;
export {
  createEllipsoidGeometry_default as default
};
