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
} from "./chunk-QPBZVL2V.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-DOOVZ7KK.js";
import "./chunk-4Y626NS4.js";
import "./chunk-SBODMIH7.js";
import "./chunk-MG5S7WER.js";
import "./chunk-7QPYGCRZ.js";
import "./chunk-34MFV7YX.js";
import "./chunk-2FJJCUZK.js";
import "./chunk-JPJ4LSZG.js";
import "./chunk-BADPSCOT.js";
import "./chunk-OFW7RW5O.js";
import "./chunk-VXNAM6M6.js";
import "./chunk-PGJX7IDB.js";
import "./chunk-BU5UQP56.js";
import "./chunk-5O437JQW.js";
import "./chunk-L67GICVQ.js";
import "./chunk-OWZNJTRO.js";
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
