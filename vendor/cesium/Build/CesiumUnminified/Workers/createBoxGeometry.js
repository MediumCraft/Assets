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
  BoxGeometry_default
} from "./chunk-JX2UMLZN.js";
import "./chunk-CKKGEWSN.js";
import "./chunk-LH6ORW6K.js";
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

// packages/engine/Source/Workers/createBoxGeometry.js
function createBoxGeometry(boxGeometry, offset) {
  if (defined_default(offset)) {
    boxGeometry = BoxGeometry_default.unpack(boxGeometry, offset);
  }
  return BoxGeometry_default.createGeometry(boxGeometry);
}
var createBoxGeometry_default = createBoxGeometry;
export {
  createBoxGeometry_default as default
};
