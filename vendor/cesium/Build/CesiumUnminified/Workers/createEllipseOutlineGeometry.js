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
  EllipseOutlineGeometry_default
} from "./chunk-ATXCKJ7V.js";
import "./chunk-CK36SPVD.js";
import "./chunk-B5K52AQJ.js";
import "./chunk-JTRSO6FN.js";
import "./chunk-3MD6ELKN.js";
import "./chunk-IJ63WEE3.js";
import "./chunk-IW3HDLIX.js";
import "./chunk-OVA5IU5S.js";
import "./chunk-DNOQ22DJ.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-GN7NDGB5.js";
import "./chunk-D45VIGEV.js";
import "./chunk-OZBWVSA5.js";
import "./chunk-YGYL7X3Q.js";
import "./chunk-O2X2JK6G.js";
import {
  defined_default
} from "./chunk-OZLASBIH.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
