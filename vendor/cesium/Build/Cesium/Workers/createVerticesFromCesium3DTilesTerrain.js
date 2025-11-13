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

import{a as u}from"./chunk-Q5ZB4SUB.js";import"./chunk-SSQDOM4X.js";import"./chunk-OPNUWFXN.js";import{a as f}from"./chunk-V6M5VRUN.js";import"./chunk-C3CZ5AW2.js";import"./chunk-ASXOJDS7.js";import"./chunk-UQTMED4F.js";import"./chunk-77LYTCH2.js";import"./chunk-LVYZDQAS.js";import"./chunk-LKH5FTCS.js";import"./chunk-BF2JANEZ.js";import"./chunk-RVIN6KTA.js";import"./chunk-QIYESAZL.js";import"./chunk-4OH3U3MU.js";import"./chunk-QRF3UCFD.js";import"./chunk-MZ7HAQPN.js";import"./chunk-PVO6WFU6.js";import"./chunk-6INKH6TT.js";import"./chunk-CBDHYUZM.js";import"./chunk-F74VTBA6.js";import"./chunk-JXKKSY54.js";import"./chunk-VBZUTFOY.js";import"./chunk-SOJPBEDM.js";import"./chunk-74M7JUED.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
