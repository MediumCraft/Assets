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
  EllipseOutlineGeometry_default
} from "./chunk-2DFBQFKG.js";
import "./chunk-4PKSGEMS.js";
import "./chunk-CKKGEWSN.js";
import "./chunk-JPJ4LSZG.js";
import "./chunk-BL2DZDVZ.js";
import "./chunk-7PEHRL25.js";
import "./chunk-XU2BSRKQ.js";
import "./chunk-7WJTEKRT.js";
import "./chunk-FXOLNMP4.js";
import "./chunk-LFDUI4AW.js";
import "./chunk-BU5UQP56.js";
import "./chunk-5O437JQW.js";
import "./chunk-L67GICVQ.js";
import {
  Ellipsoid_default
} from "./chunk-CJHTP52Z.js";
import {
  Cartesian3_default
} from "./chunk-RAUQWQRB.js";
import "./chunk-X3F3GI34.js";
import "./chunk-O7QILKQD.js";
import {
  defined_default
} from "./chunk-3AOYYRRB.js";

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
