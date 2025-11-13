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
  PrimitivePipeline_default
} from "./chunk-UVBTYIVC.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-DOOVZ7KK.js";
import "./chunk-XP26N4GJ.js";
import "./chunk-2X35NXQX.js";
import "./chunk-YSQXXPCT.js";
import "./chunk-UBDQ3B4Z.js";
import "./chunk-PD3AU2WW.js";
import "./chunk-GDRC42XB.js";
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
import "./chunk-CJHTP52Z.js";
import "./chunk-RAUQWQRB.js";
import "./chunk-X3F3GI34.js";
import "./chunk-O7QILKQD.js";
import "./chunk-3AOYYRRB.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
