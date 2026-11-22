// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import {
  AnimationClip as e,
  Bone as t,
  Box3 as n,
  BoxGeometry as r,
  BufferAttribute as i,
  BufferGeometry as a,
  CanvasTexture as o,
  ClampToEdgeWrapping as s,
  Color as c,
  ColorManagement as l,
  DirectionalLight as u,
  FileLoader as d,
  Group as f,
  ImageBitmapLoader as p,
  InstancedBufferAttribute as m,
  InstancedMesh as h,
  InterleavedBuffer as g,
  InterleavedBufferAttribute as _,
  Interpolant as v,
  InterpolateDiscrete as y,
  InterpolateLinear as b,
  Line as x,
  LineBasicMaterial as S,
  LineLoop as ee,
  LineSegments as te,
  LinearFilter as ne,
  LinearMipmapLinearFilter as re,
  LinearMipmapNearestFilter as C,
  LinearSRGBColorSpace as w,
  Loader as ie,
  LoaderUtils as T,
  Material as E,
  MathUtils as ae,
  Matrix4 as D,
  Mesh as O,
  MeshBasicMaterial as k,
  MeshPhysicalMaterial as A,
  MeshStandardMaterial as j,
  MirroredRepeatWrapping as oe,
  NearestFilter as se,
  NearestMipmapLinearFilter as ce,
  NearestMipmapNearestFilter as le,
  NumberKeyframeTrack as ue,
  Object3D as de,
  OrthographicCamera as fe,
  PerspectiveCamera as pe,
  PointLight as me,
  Points as he,
  PointsMaterial as ge,
  PropertyBinding as _e,
  Quaternion as ve,
  QuaternionKeyframeTrack as ye,
  RepeatWrapping as be,
  SRGBColorSpace as M,
  Skeleton as xe,
  SkinnedMesh as Se,
  Sphere as Ce,
  SpotLight as we,
  Texture as Te,
  TextureLoader as Ee,
  Vector2 as De,
  Vector3 as N,
  VectorKeyframeTrack as Oe,
} from "three";
function ke(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    o = {},
    s = {},
    c = e[0].morphTargetsRelative,
    l = new a(),
    u = 0;
  for (let a = 0; a < e.length; ++a) {
    let d = e[a],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            a +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              a +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (o[e] === void 0 && (o[e] = []), o[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            a +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (c !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            a +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              a +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      (s[e] === void 0 && (s[e] = []), s[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0)
        e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              a +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (l.addGroup(u, e, a), (u += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    l.setIndex(n);
  }
  for (let e in o) {
    let t = Ae(o[e]);
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`,
        ),
        null
      );
    l.setAttribute(e, t);
  }
  for (let e in s) {
    let t = s[e][0].length;
    if (t !== 0) {
      ((l.morphAttributes = l.morphAttributes || {}),
        (l.morphAttributes[e] = []));
      for (let n = 0; n < t; ++n) {
        let t = [];
        for (let r = 0; r < s[e].length; ++r) t.push(s[e][r][n]);
        let r = Ae(t);
        if (!r)
          return (
            console.error(
              `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
                e +
                ` morphAttribute.`,
            ),
            null
          );
        l.morphAttributes[e].push(r);
      }
    }
  }
  return l;
}
function Ae(e) {
  let t,
    n,
    r,
    a = -1,
    o = 0;
  for (let i = 0; i < e.length; ++i) {
    let s = e[i];
    if ((t === void 0 && (t = s.array.constructor), t !== s.array.constructor))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`,
        ),
        null
      );
    if ((n === void 0 && (n = s.itemSize), n !== s.itemSize))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`,
        ),
        null
      );
    if ((r === void 0 && (r = s.normalized), r !== s.normalized))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`,
        ),
        null
      );
    if ((a === -1 && (a = s.gpuType), a !== s.gpuType))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`,
        ),
        null
      );
    o += s.count * n;
  }
  let s = new t(o),
    c = new i(s, n, r),
    l = 0;
  for (let t = 0; t < e.length; ++t) {
    let r = e[t];
    if (r.isInterleavedBufferAttribute) {
      let e = l / n;
      for (let t = 0, i = r.count; t < i; t++)
        for (let i = 0; i < n; i++) {
          let n = r.getComponent(t, i);
          c.setComponent(t + e, i, n);
        }
    } else s.set(r.array, l);
    l += r.count * n;
  }
  return (a !== void 0 && (c.gpuType = a), c);
}
function je(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`,
      ),
      e
    );
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`);
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e);
        (e.setIndex(t), (n = e.getIndex()));
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`,
          ),
          e
        );
    }
    let r = n.count - 2,
      i = [];
    if (t === 2)
      for (let e = 1; e <= r; e++)
        (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)));
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    return (
      i.length / 3 !== r &&
        console.error(
          `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`,
        ),
      e.setIndex(i),
      e.clearGroups(),
      e
    );
  }
  return (
    console.error(
      `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,
      t,
    ),
    e
  );
}
function Me(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    Ne(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function Ne(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    Ne(e.children[r], t.children[r], n);
}
var Pe = class extends ie {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new ze(e);
      }),
      this.register(function (e) {
        return new Be(e);
      }),
      this.register(function (e) {
        return new Ye(e);
      }),
      this.register(function (e) {
        return new Xe(e);
      }),
      this.register(function (e) {
        return new Ze(e);
      }),
      this.register(function (e) {
        return new He(e);
      }),
      this.register(function (e) {
        return new Ue(e);
      }),
      this.register(function (e) {
        return new We(e);
      }),
      this.register(function (e) {
        return new Ge(e);
      }),
      this.register(function (e) {
        return new Re(e);
      }),
      this.register(function (e) {
        return new Ke(e);
      }),
      this.register(function (e) {
        return new Ve(e);
      }),
      this.register(function (e) {
        return new Je(e);
      }),
      this.register(function (e) {
        return new qe(e);
      }),
      this.register(function (e) {
        return new Ie(e);
      }),
      this.register(function (e) {
        return new Qe(e, F.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Qe(e, F.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new $e(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = T.extractUrlBase(e);
      a = T.resolveURL(t, this.path);
    } else a = T.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new d(this.manager);
    (s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                (t(n), i.manager.itemEnd(e));
              },
              o,
            );
          } catch (e) {
            o(e);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder();
    if (typeof e == `string`) i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (s.decode(new Uint8Array(e, 0, 4)) === et) {
        try {
          a[F.KHR_BINARY_GLTF] = new nt(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[F.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(s.decode(e));
    else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r &&
        r(
          Error(
            `THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`,
          ),
        );
      return;
    }
    let c = new Ct(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c);
      (t.name ||
        console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0));
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || [];
        switch (t) {
          case F.KHR_MATERIALS_UNLIT:
            a[t] = new Le();
            break;
          case F.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new rt(i, this.dracoLoader);
            break;
          case F.KHR_TEXTURE_TRANSFORM:
            a[t] = new it();
            break;
          case F.KHR_MESH_QUANTIZATION:
            a[t] = new at();
            break;
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`);
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, r));
  }
  parseAsync(e, t) {
    let n = this;
    return new Promise(function (r, i) {
      n.parse(e, t, r, i);
    });
  }
};
function Fe() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
function P(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var F = {
    KHR_BINARY_GLTF: `KHR_binary_glTF`,
    KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`,
    KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`,
    KHR_MATERIALS_CLEARCOAT: `KHR_materials_clearcoat`,
    KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`,
    KHR_MATERIALS_IOR: `KHR_materials_ior`,
    KHR_MATERIALS_SHEEN: `KHR_materials_sheen`,
    KHR_MATERIALS_SPECULAR: `KHR_materials_specular`,
    KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`,
    KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`,
    KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`,
    KHR_MATERIALS_UNLIT: `KHR_materials_unlit`,
    KHR_MATERIALS_VOLUME: `KHR_materials_volume`,
    KHR_TEXTURE_BASISU: `KHR_texture_basisu`,
    KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`,
    KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`,
    KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`,
    EXT_MATERIALS_BUMP: `EXT_materials_bump`,
    EXT_TEXTURE_WEBP: `EXT_texture_webp`,
    EXT_TEXTURE_AVIF: `EXT_texture_avif`,
    EXT_MESHOPT_COMPRESSION: `EXT_meshopt_compression`,
    KHR_MESHOPT_COMPRESSION: `KHR_meshopt_compression`,
    EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing`,
  },
  Ie = class {
    constructor(e) {
      ((this.parser = e),
        (this.name = F.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} }));
    }
    _markDefs() {
      let e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        r.extensions &&
          r.extensions[this.name] &&
          r.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, r.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      let t = this.parser,
        n = `light:` + e,
        r = t.cache.get(n);
      if (r) return r;
      let i = t.json,
        a = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e],
        o,
        s = new c(16777215);
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], w);
      let l = a.range === void 0 ? 0 : a.range;
      switch (a.type) {
        case `directional`:
          ((o = new u(s)), o.target.position.set(0, 0, -1), o.add(o.target));
          break;
        case `point`:
          ((o = new me(s)), (o.distance = l));
          break;
        case `spot`:
          ((o = new we(s)),
            (o.distance = l),
            (a.spot = a.spot || {}),
            (a.spot.innerConeAngle =
              a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle),
            (a.spot.outerConeAngle =
              a.spot.outerConeAngle === void 0
                ? Math.PI / 4
                : a.spot.outerConeAngle),
            (o.angle = a.spot.outerConeAngle),
            (o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
            o.target.position.set(0, 0, -1),
            o.add(o.target));
          break;
        default:
          throw Error(`THREE.GLTFLoader: Unexpected light type: ` + a.type);
      }
      return (
        o.position.set(0, 0, 0),
        V(o, a),
        a.intensity !== void 0 && (o.intensity = a.intensity),
        (o.name = t.createUniqueName(a.name || `light_` + e)),
        (r = Promise.resolve(o)),
        t.cache.add(n, r),
        r
      );
    }
    getDependency(e, t) {
      if (e === `light`) return this._loadLight(t);
    }
    createNodeAttachment(e) {
      let t = this,
        n = this.parser,
        r = n.json.nodes[e],
        i = ((r.extensions && r.extensions[this.name]) || {}).light;
      return i === void 0
        ? null
        : this._loadLight(i).then(function (e) {
            return n._getNodeRef(t.cache, i, e);
          });
    }
  },
  Le = class {
    constructor() {
      this.name = F.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return k;
    }
    extendParams(e, t, n) {
      let r = [];
      ((e.color = new c(1, 1, 1)), (e.opacity = 1));
      let i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor;
          (e.color.setRGB(t[0], t[1], t[2], w), (e.opacity = t[3]));
        }
        i.baseColorTexture !== void 0 &&
          r.push(n.assignTexture(e, `map`, i.baseColorTexture, M));
      }
      return Promise.all(r);
    }
  },
  Re = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_EMISSIVE_STRENGTH));
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      return (
        n === null ||
          (n.emissiveStrength !== void 0 &&
            (t.emissiveIntensity = n.emissiveStrength)),
        Promise.resolve()
      );
    }
  },
  ze = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_CLEARCOAT));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor),
        n.clearcoatTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `clearcoatMap`, n.clearcoatTexture),
          ),
        n.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = n.clearcoatRoughnessFactor),
        n.clearcoatRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `clearcoatRoughnessMap`,
              n.clearcoatRoughnessTexture,
            ),
          ),
        n.clearcoatNormalTexture !== void 0 &&
          (r.push(
            this.parser.assignTexture(
              t,
              `clearcoatNormalMap`,
              n.clearcoatNormalTexture,
            ),
          ),
          n.clearcoatNormalTexture.scale !== void 0))
      ) {
        let e = n.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new De(e, e);
      }
      return Promise.all(r);
    }
  },
  Be = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_DISPERSION));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      return (
        n === null ||
          (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion),
        Promise.resolve()
      );
    }
  },
  Ve = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_IRIDESCENCE));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor),
        n.iridescenceTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceMap`,
              n.iridescenceTexture,
            ),
          ),
        n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor),
        t.iridescenceThicknessRange === void 0 &&
          (t.iridescenceThicknessRange = [100, 400]),
        n.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
        n.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
        n.iridescenceThicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceThicknessMap`,
              n.iridescenceThicknessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  He = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_SHEEN));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        ((t.sheenColor = new c(0, 0, 0)),
        (t.sheenRoughness = 0),
        (t.sheen = 1),
        n.sheenColorFactor !== void 0)
      ) {
        let e = n.sheenColorFactor;
        t.sheenColor.setRGB(e[0], e[1], e[2], w);
      }
      return (
        n.sheenRoughnessFactor !== void 0 &&
          (t.sheenRoughness = n.sheenRoughnessFactor),
        n.sheenColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenColorMap`,
              n.sheenColorTexture,
              M,
            ),
          ),
        n.sheenRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenRoughnessMap`,
              n.sheenRoughnessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Ue = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_TRANSMISSION));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.transmissionFactor !== void 0 &&
          (t.transmission = n.transmissionFactor),
        n.transmissionTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `transmissionMap`,
              n.transmissionTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  We = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_VOLUME));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor),
        n.thicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `thicknessMap`, n.thicknessTexture),
          ),
        (t.attenuationDistance = n.attenuationDistance || 1 / 0));
      let i = n.attenuationColor || [1, 1, 1];
      return (
        (t.attenuationColor = new c().setRGB(i[0], i[1], i[2], w)),
        Promise.all(r)
      );
    }
  },
  Ge = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_IOR));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      return n === null
        ? Promise.resolve()
        : ((t.ior = n.ior === void 0 ? 1.5 : n.ior),
          t.ior === 0 && (t.ior = 1e3),
          Promise.resolve());
    }
  },
  Ke = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_SPECULAR));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.specularIntensity =
        n.specularFactor === void 0 ? 1 : n.specularFactor),
        n.specularTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularIntensityMap`,
              n.specularTexture,
            ),
          ));
      let i = n.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new c().setRGB(i[0], i[1], i[2], w)),
        n.specularColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularColorMap`,
              n.specularColorTexture,
              M,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  qe = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.EXT_MATERIALS_BUMP));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        (t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor),
        n.bumpTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `bumpMap`, n.bumpTexture)),
        Promise.all(r)
      );
    }
  },
  Je = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_MATERIALS_ANISOTROPY));
    }
    getMaterialType(e) {
      return P(this.parser, e, this.name) === null ? null : A;
    }
    extendMaterialParams(e, t) {
      let n = P(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.anisotropyStrength !== void 0 &&
          (t.anisotropy = n.anisotropyStrength),
        n.anisotropyRotation !== void 0 &&
          (t.anisotropyRotation = n.anisotropyRotation),
        n.anisotropyTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `anisotropyMap`, n.anisotropyTexture),
          ),
        Promise.all(r)
      );
    }
  },
  Ye = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.KHR_TEXTURE_BASISU));
    }
    loadTexture(e) {
      let t = this.parser,
        n = t.json,
        r = n.textures[e];
      if (!r.extensions || !r.extensions[this.name]) return null;
      let i = r.extensions[this.name],
        a = t.options.ktx2Loader;
      if (!a) {
        if (
          n.extensionsRequired &&
          n.extensionsRequired.indexOf(this.name) >= 0
        )
          throw Error(
            `THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`,
          );
        return null;
      }
      return t.loadTextureImage(e, i.source, a);
    }
  },
  Xe = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.EXT_TEXTURE_WEBP));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  Ze = class {
    constructor(e) {
      ((this.parser = e), (this.name = F.EXT_TEXTURE_AVIF));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  Qe = class {
    constructor(e, t) {
      ((this.name = t), (this.parser = e));
    }
    loadBufferView(e) {
      let t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        let e = n.extensions[this.name],
          r = this.parser.getDependency(`buffer`, e.buffer),
          i = this.parser.options.meshoptDecoder;
        if (!i || !i.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw Error(
              `THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`,
            );
          return null;
        }
        return r.then(function (t) {
          let n = e.byteOffset || 0,
            r = e.byteLength || 0,
            a = e.count,
            o = e.byteStride,
            s = new Uint8Array(t, n, r);
          return i.decodeGltfBufferAsync
            ? i
                .decodeGltfBufferAsync(a, o, s, e.mode, e.filter)
                .then(function (e) {
                  return e.buffer;
                })
            : i.ready.then(function () {
                let t = new ArrayBuffer(a * o);
                return (
                  i.decodeGltfBuffer(
                    new Uint8Array(t),
                    a,
                    o,
                    s,
                    e.mode,
                    e.filter,
                  ),
                  t
                );
              });
        });
      }
      return null;
    }
  },
  $e = class {
    constructor(e) {
      ((this.name = F.EXT_MESH_GPU_INSTANCING), (this.parser = e));
    }
    createNodeMesh(e) {
      let t = this.parser.json,
        n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
        return null;
      let r = t.meshes[n.mesh];
      for (let e of r.primitives)
        if (
          e.mode !== L.TRIANGLES &&
          e.mode !== L.TRIANGLE_STRIP &&
          e.mode !== L.TRIANGLE_FAN &&
          e.mode !== void 0
        )
          return null;
      let i = n.extensions[this.name].attributes,
        o = [],
        s = {};
      for (let e in i)
        o.push(
          this.parser
            .getDependency(`accessor`, i[e])
            .then((t) => ((s[e] = t), s[e])),
        );
      return o.length < 1
        ? null
        : (o.push(this.parser.createNodeMesh(e)),
          Promise.all(o).then((e) => {
            let t = e.pop(),
              n = t.isGroup ? t.children : [t],
              r = e[0].count,
              i = [];
            for (let e of n) {
              let t = new D(),
                n = new N(),
                o = new ve(),
                c = new N(1, 1, 1),
                l = new h(e.geometry, e.material, r);
              for (let e = 0; e < r; e++)
                (s.TRANSLATION && n.fromBufferAttribute(s.TRANSLATION, e),
                  s.ROTATION && o.fromBufferAttribute(s.ROTATION, e),
                  s.SCALE && c.fromBufferAttribute(s.SCALE, e),
                  l.setMatrixAt(e, t.compose(n, o, c)));
              let u = null;
              for (let e in s)
                if (e === `_COLOR_0`) {
                  let t = s[e];
                  l.instanceColor = new m(t.array, t.itemSize, t.normalized);
                } else if (
                  e !== `TRANSLATION` &&
                  e !== `ROTATION` &&
                  e !== `SCALE`
                ) {
                  if (u === null) {
                    let e = l.geometry;
                    ((u = new a()), (u.name = e.name));
                    for (let t in e.attributes)
                      u.setAttribute(t, e.attributes[t]);
                    for (let t in e.morphAttributes)
                      u.morphAttributes[t] = e.morphAttributes[t];
                    (e.index !== null && u.setIndex(e.index),
                      (u.morphTargetsRelative = e.morphTargetsRelative));
                    for (let t of e.groups)
                      u.addGroup(t.start, t.count, t.materialIndex);
                    (e.boundingBox !== null &&
                      (u.boundingBox = e.boundingBox.clone()),
                      e.boundingSphere !== null &&
                        (u.boundingSphere = e.boundingSphere.clone()),
                      (u.drawRange.start = e.drawRange.start),
                      (u.drawRange.count = e.drawRange.count),
                      (u.userData = Object.assign({}, e.userData)),
                      (l.geometry = u));
                  }
                  let t = s[e];
                  u.setAttribute(e, new m(t.array, t.itemSize, t.normalized));
                }
              (de.prototype.copy.call(l, e),
                this.parser.assignFinalMaterial(l),
                i.push(l));
            }
            return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
          }));
    }
  },
  et = `glTF`,
  I = 12,
  tt = { JSON: 1313821514, BIN: 5130562 },
  nt = class {
    constructor(e) {
      ((this.name = F.KHR_BINARY_GLTF),
        (this.content = null),
        (this.body = null));
      let t = new DataView(e, 0, I),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== et)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);
      if (this.header.version < 2)
        throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);
      let r = this.header.length - I,
        i = new DataView(e, I),
        a = 0;
      for (; a < r;) {
        let t = i.getUint32(a, !0);
        a += 4;
        let r = i.getUint32(a, !0);
        if (((a += 4), r === tt.JSON)) {
          let r = new Uint8Array(e, I + a, t);
          this.content = n.decode(r);
        } else if (r === tt.BIN) {
          let n = I + a;
          this.body = e.slice(n, n + t);
        }
        a += t;
      }
      if (this.content === null)
        throw Error(`THREE.GLTFLoader: JSON content not found.`);
    }
  },
  rt = class {
    constructor(e, t) {
      if (!t)
        throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);
      ((this.name = F.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload());
    }
    decodePrimitive(e, t) {
      let n = this.json,
        r = this.dracoLoader,
        i = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {};
      for (let e in a) {
        let t = ft[e] || e.toLowerCase();
        o[t] = a[e];
      }
      for (let t in e.attributes) {
        let r = ft[t] || t.toLowerCase();
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]];
          ((c[r] = R[i.componentType].name), (s[r] = i.normalized === !0));
        }
      }
      return t.getDependency(`bufferView`, i).then(function (e) {
        return new Promise(function (t, n) {
          r.decodeDracoFile(
            e,
            function (e) {
              for (let t in e.attributes) {
                let n = e.attributes[t],
                  r = s[t];
                r !== void 0 && (n.normalized = r);
              }
              t(e);
            },
            o,
            c,
            w,
            n,
          );
        });
      });
    }
  },
  it = class {
    constructor() {
      this.name = F.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      if (
        (t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0
      )
        return e;
      if (
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        t.rotation !== void 0)
      ) {
        let t = Math.cos(e.rotation),
          n = Math.sin(e.rotation);
        (e.matrix.set(
          e.repeat.x * t,
          e.repeat.y * n,
          e.offset.x,
          -e.repeat.x * n,
          e.repeat.y * t,
          e.offset.y,
          0,
          0,
          1,
        ),
          (e.matrixAutoUpdate = !1));
      }
      return ((e.needsUpdate = !0), e);
    }
  },
  at = class {
    constructor() {
      this.name = F.KHR_MESH_QUANTIZATION;
    }
  },
  ot = class extends v {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r * 3 + r;
      for (let e = 0; e !== r; e++) t[e] = n[i + e];
      return t;
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = o * 2,
        c = o * 3,
        l = r - t,
        u = (n - t) / l,
        d = u * u,
        f = d * u,
        p = e * c,
        m = p - c,
        h = -2 * f + 3 * d,
        g = f - d,
        _ = 1 - h,
        v = g - d + u;
      for (let e = 0; e !== o; e++) {
        let t = a[m + e + o],
          n = a[m + e + s] * l,
          r = a[p + e + o],
          c = a[p + e] * l;
        i[e] = _ * t + v * n + h * r + g * c;
      }
      return i;
    }
  },
  st = new ve(),
  ct = class extends ot {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r);
      return (st.fromArray(i).normalize().toArray(i), i);
    }
  },
  L = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  R = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  lt = { 9728: se, 9729: ne, 9984: le, 9985: C, 9986: ce, 9987: re },
  ut = { 33071: s, 33648: oe, 10497: be },
  dt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  ft = {
    POSITION: `position`,
    NORMAL: `normal`,
    TANGENT: `tangent`,
    TEXCOORD_0: `uv`,
    TEXCOORD_1: `uv1`,
    TEXCOORD_2: `uv2`,
    TEXCOORD_3: `uv3`,
    COLOR_0: `color`,
    WEIGHTS_0: `skinWeight`,
    JOINTS_0: `skinIndex`,
  },
  z = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  pt = { CUBICSPLINE: void 0, LINEAR: b, STEP: y },
  mt = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` };
function ht(e) {
  return (
    e.DefaultMaterial === void 0 &&
      (e.DefaultMaterial = new j({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: 0,
      })),
    e.DefaultMaterial
  );
}
function B(e, t, n) {
  for (let r in n.extensions)
    e[r] === void 0 &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[r] = n.extensions[r]));
}
function V(e, t) {
  t.extras !== void 0 &&
    (typeof t.extras == `object`
      ? Object.assign(e.userData, t.extras)
      : console.warn(
          `THREE.GLTFLoader: Ignoring primitive type .extras, ` + t.extras,
        ));
}
function gt(e, t, n) {
  let r = !1,
    i = !1,
    a = !1;
  for (let e = 0, n = t.length; e < n; e++) {
    let n = t[e];
    if (
      (n.POSITION !== void 0 && (r = !0),
      n.NORMAL !== void 0 && (i = !0),
      n.COLOR_0 !== void 0 && (a = !0),
      r && i && a)
    )
      break;
  }
  if (!r && !i && !a) return Promise.resolve(e);
  let o = [],
    s = [],
    c = [];
  for (let l = 0, u = t.length; l < u; l++) {
    let u = t[l];
    if (r) {
      let t =
        u.POSITION === void 0
          ? e.attributes.position
          : n.getDependency(`accessor`, u.POSITION);
      o.push(t);
    }
    if (i) {
      let t =
        u.NORMAL === void 0
          ? e.attributes.normal
          : n.getDependency(`accessor`, u.NORMAL);
      s.push(t);
    }
    if (a) {
      let t =
        u.COLOR_0 === void 0
          ? e.attributes.color
          : n.getDependency(`accessor`, u.COLOR_0);
      c.push(t);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(c)]).then(
    function (t) {
      let n = t[0],
        o = t[1],
        s = t[2];
      return (
        r && (e.morphAttributes.position = n),
        i && (e.morphAttributes.normal = o),
        a && (e.morphAttributes.color = s),
        (e.morphTargetsRelative = !0),
        e
      );
    },
  );
}
function _t(e, t) {
  if ((e.updateMorphTargets(), t.weights !== void 0))
    for (let n = 0, r = t.weights.length; n < r; n++)
      e.morphTargetInfluences[n] = t.weights[n];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, r = n.length; t < r; t++)
        e.morphTargetDictionary[n[t]] = t;
    } else
      console.warn(
        `THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`,
      );
  }
}
function vt(e) {
  let t,
    n = e.extensions && e.extensions[F.KHR_DRACO_MESH_COMPRESSION];
  if (
    ((t = n
      ? `draco:` + n.bufferView + `:` + n.indices + `:` + yt(n.attributes)
      : e.indices + `:` + yt(e.attributes) + `:` + e.mode),
    e.targets !== void 0)
  )
    for (let n = 0, r = e.targets.length; n < r; n++)
      t += `:` + yt(e.targets[n]);
  return t;
}
function yt(e) {
  let t = ``,
    n = Object.keys(e).sort();
  for (let r = 0, i = n.length; r < i; r++) t += n[r] + `:` + e[n[r]] + `;`;
  return t;
}
function bt(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw Error(
        `THREE.GLTFLoader: Unsupported normalized accessor component type.`,
      );
  }
}
function xt(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0
    ? `image/jpeg`
    : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0
      ? `image/webp`
      : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0
        ? `image/ktx2`
        : `image/png`;
}
var St = new D(),
  Ct = class {
    constructor(e = {}, t = {}) {
      ((this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new Fe()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {}));
      let n = !1,
        r = -1,
        i = !1,
        a = -1;
      if (typeof navigator < `u` && navigator.userAgent !== void 0) {
        let e = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(e) === !0;
        let t = e.match(/Version\/(\d+)/);
        ((r = n && t ? parseInt(t[1], 10) : -1),
          (i = e.indexOf(`Firefox`) > -1),
          (a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1));
      }
      ((this.textureLoader =
        typeof createImageBitmap > `u` || (n && r < 17) || (i && a < 98)
          ? new Ee(this.options.manager)
          : new p(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new d(this.options.manager)),
        this.fileLoader.setResponseType(`arraybuffer`),
        this.options.crossOrigin === `use-credentials` &&
          this.fileLoader.setWithCredentials(!0));
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      let n = this,
        r = this.json,
        i = this.extensions;
      (this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot();
          }),
        )
          .then(function () {
            return Promise.all([
              n.getDependencies(`scene`),
              n.getDependencies(`animation`),
              n.getDependencies(`camera`),
            ]);
          })
          .then(function (t) {
            let a = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: n,
              userData: {},
            };
            return (
              B(i, a, r),
              V(a, r),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(a);
                }),
              ).then(function () {
                for (let e of a.scenes) e.updateMatrixWorld();
                e(a);
              })
            );
          })
          .catch(t));
    }
    _markDefs() {
      let e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n].joints;
        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
      }
      for (let t = 0, r = e.length; t < r; t++) {
        let r = e[t];
        (r.mesh !== void 0 &&
          (this._addNodeRef(this.meshCache, r.mesh),
          r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
          r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera));
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 &&
        (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      let r = n.clone(),
        i = (e, t) => {
          let n = this.associations.get(e);
          n != null && this.associations.set(t, n);
          for (let [n, r] of e.children.entries()) i(r, t.children[n]);
        };
      return (i(n, r), (r.name += `_instance_` + e.uses[t]++), r);
    }
    _invokeOne(e) {
      let t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        let r = e(t[n]);
        if (r) return r;
      }
      return null;
    }
    _invokeAll(e) {
      let t = Object.values(this.plugins);
      t.unshift(this);
      let n = [];
      for (let r = 0; r < t.length; r++) {
        let i = e(t[r]);
        i && n.push(i);
      }
      return n;
    }
    getDependency(e, t) {
      let n = e + `:` + t,
        r = this.cache.get(n);
      if (!r) {
        switch (e) {
          case `scene`:
            r = this.loadScene(t);
            break;
          case `node`:
            r = this._invokeOne(function (e) {
              return e.loadNode && e.loadNode(t);
            });
            break;
          case `mesh`:
            r = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t);
            });
            break;
          case `accessor`:
            r = this.loadAccessor(t);
            break;
          case `bufferView`:
            r = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t);
            });
            break;
          case `buffer`:
            r = this.loadBuffer(t);
            break;
          case `material`:
            r = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t);
            });
            break;
          case `texture`:
            r = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t);
            });
            break;
          case `skin`:
            r = this.loadSkin(t);
            break;
          case `animation`:
            r = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t);
            });
            break;
          case `camera`:
            r = this.loadCamera(t);
            break;
          default:
            if (
              ((r = this._invokeOne(function (n) {
                return n != this && n.getDependency && n.getDependency(e, t);
              })),
              !r)
            )
              throw Error(`Unknown type: ` + e);
        }
        this.cache.add(n, r);
      }
      return r;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        let n = this,
          r = this.json[e + (e === `mesh` ? `es` : `s`)] || [];
        ((t = Promise.all(
          r.map(function (t, r) {
            return n.getDependency(e, r);
          }),
        )),
          this.cache.add(e, t));
      }
      return t;
    }
    loadBuffer(e) {
      let t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && t.type !== `arraybuffer`)
        throw Error(
          `THREE.GLTFLoader: ` + t.type + ` buffer type is not supported.`,
        );
      if (t.uri === void 0 && e === 0)
        return Promise.resolve(this.extensions[F.KHR_BINARY_GLTF].body);
      let r = this.options;
      return new Promise(function (e, i) {
        n.load(T.resolveURL(t.uri, r.path), e, void 0, function () {
          i(Error(`THREE.GLTFLoader: Failed to load buffer "` + t.uri + `".`));
        });
      });
    }
    loadBufferView(e) {
      let t = this.json.bufferViews[e];
      return this.getDependency(`buffer`, t.buffer).then(function (e) {
        let n = t.byteLength || 0,
          r = t.byteOffset || 0;
        return e.slice(r, r + n);
      });
    }
    loadAccessor(e) {
      let t = this,
        n = this.json,
        r = this.json.accessors[e];
      if (r.bufferView === void 0 && r.sparse === void 0) {
        let e = dt[r.type],
          t = R[r.componentType],
          n = r.normalized === !0,
          a = new t(r.count * e);
        return Promise.resolve(new i(a, e, n));
      }
      let a = [];
      return (
        r.bufferView === void 0
          ? a.push(null)
          : a.push(this.getDependency(`bufferView`, r.bufferView)),
        r.sparse !== void 0 &&
          (a.push(
            this.getDependency(`bufferView`, r.sparse.indices.bufferView),
          ),
          a.push(this.getDependency(`bufferView`, r.sparse.values.bufferView))),
        Promise.all(a).then(function (e) {
          let a = e[0],
            o = dt[r.type],
            s = R[r.componentType],
            c = s.BYTES_PER_ELEMENT,
            l = c * o,
            u = r.byteOffset || 0,
            d =
              r.bufferView === void 0
                ? void 0
                : n.bufferViews[r.bufferView].byteStride,
            f = r.normalized === !0,
            p,
            m;
          if (d && d !== l) {
            let e = Math.floor(u / d),
              n =
                `InterleavedBuffer:` +
                r.bufferView +
                `:` +
                r.componentType +
                `:` +
                e +
                `:` +
                r.count,
              i = t.cache.get(n);
            (i ||
              ((p = new s(a, e * d, (r.count * d) / c)),
              (i = new g(p, d / c)),
              t.cache.add(n, i)),
              (m = new _(i, o, (u % d) / c, f)));
          } else
            ((p = a === null ? new s(r.count * o) : new s(a, u, r.count * o)),
              (m = new i(p, o, f)));
          if (r.sparse !== void 0) {
            let t = dt.SCALAR,
              n = R[r.sparse.indices.componentType],
              c = r.sparse.indices.byteOffset || 0,
              l = r.sparse.values.byteOffset || 0,
              u = new n(e[1], c, r.sparse.count * t),
              d = new s(e[2], l, r.sparse.count * o);
            (a !== null &&
              (m = new i(m.array.slice(), m.itemSize, m.normalized)),
              (m.normalized = !1));
            for (let e = 0, t = u.length; e < t; e++) {
              let t = u[e];
              if (
                (m.setX(t, d[e * o]),
                o >= 2 && m.setY(t, d[e * o + 1]),
                o >= 3 && m.setZ(t, d[e * o + 2]),
                o >= 4 && m.setW(t, d[e * o + 3]),
                o >= 5)
              )
                throw Error(
                  `THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`,
                );
            }
            m.normalized = f;
          }
          return m;
        })
      );
    }
    loadTexture(e) {
      let t = this.json,
        n = this.options,
        r = t.textures[e].source,
        i = t.images[r],
        a = this.textureLoader;
      if (i.uri) {
        let e = n.manager.getHandler(i.uri);
        e !== null && (a = e);
      }
      return this.loadTextureImage(e, r, a);
    }
    loadTextureImage(e, t, n) {
      let r = this,
        i = this.json,
        a = i.textures[e],
        o = i.images[t],
        s = (o.uri || o.bufferView) + `:` + a.sampler;
      if (this.textureCache[s]) return this.textureCache[s];
      let c = this.loadImageSource(t, n)
        .then(function (t) {
          ((t.flipY = !1),
            (t.name = a.name || o.name || ``),
            t.name === `` &&
              typeof o.uri == `string` &&
              o.uri.startsWith(`data:image/`) === !1 &&
              (t.name = o.uri));
          let n = (i.samplers || {})[a.sampler] || {};
          return (
            (t.magFilter = lt[n.magFilter] || 1006),
            (t.minFilter = lt[n.minFilter] || 1008),
            (t.wrapS = ut[n.wrapS] || 1e3),
            (t.wrapT = ut[n.wrapT] || 1e3),
            (t.generateMipmaps =
              !t.isCompressedTexture &&
              t.minFilter !== 1003 &&
              t.minFilter !== 1006),
            r.associations.set(t, { textures: e }),
            t
          );
        })
        .catch(function () {
          return null;
        });
      return ((this.textureCache[s] = c), c);
    }
    loadImageSource(e, t) {
      let n = this,
        r = this.json,
        i = this.options;
      if (this.sourceCache[e] !== void 0)
        return this.sourceCache[e].then((e) => e.clone());
      let a = r.images[e],
        o = self.URL || self.webkitURL,
        s = a.uri || ``,
        c = !1;
      if (a.bufferView !== void 0)
        s = n.getDependency(`bufferView`, a.bufferView).then(function (e) {
          c = !0;
          let t = new Blob([e], { type: a.mimeType });
          return ((s = o.createObjectURL(t)), s);
        });
      else if (a.uri === void 0)
        throw Error(
          `THREE.GLTFLoader: Image ` + e + ` is missing URI and bufferView`,
        );
      let l = Promise.resolve(s)
        .then(function (e) {
          return new Promise(function (n, r) {
            let a = n;
            (t.isImageBitmapLoader === !0 &&
              (a = function (e) {
                let t = new Te(e);
                ((t.needsUpdate = !0), n(t));
              }),
              t.load(T.resolveURL(e, i.path), a, void 0, r));
          });
        })
        .then(function (e) {
          return (
            c === !0 && o.revokeObjectURL(s),
            V(e, a),
            (e.userData.mimeType = a.mimeType || xt(a.uri)),
            e
          );
        })
        .catch(function (e) {
          throw (
            console.error(`THREE.GLTFLoader: Couldn't load texture`, s),
            e
          );
        });
      return ((this.sourceCache[e] = l), l);
    }
    assignTexture(e, t, n, r) {
      let i = this;
      return this.getDependency(`texture`, n.index).then(function (a) {
        if (!a) return null;
        if (
          (n.texCoord !== void 0 &&
            n.texCoord > 0 &&
            ((a = a.clone()), (a.channel = n.texCoord)),
          i.extensions[F.KHR_TEXTURE_TRANSFORM])
        ) {
          let e =
            n.extensions === void 0
              ? void 0
              : n.extensions[F.KHR_TEXTURE_TRANSFORM];
          if (e) {
            let t = i.associations.get(a);
            ((a = i.extensions[F.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
              i.associations.set(a, t));
          }
        }
        return (r !== void 0 && (a.colorSpace = r), (e[t] = a), a);
      });
    }
    assignFinalMaterial(e) {
      let t = e.geometry,
        n = e.material,
        r = t.attributes.tangent === void 0,
        i = t.attributes.color !== void 0,
        a = t.attributes.normal === void 0;
      if (e.isPoints) {
        let e = `PointsMaterial:` + n.uuid,
          t = this.cache.get(e);
        (t ||
          ((t = new ge()),
          E.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          (t.sizeAttenuation = !1),
          this.cache.add(e, t)),
          (n = t));
      } else if (e.isLine) {
        let e = `LineBasicMaterial:` + n.uuid,
          t = this.cache.get(e);
        (t ||
          ((t = new S()),
          E.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          this.cache.add(e, t)),
          (n = t));
      }
      if (r || i || a) {
        let e = `ClonedMaterial:` + n.uuid + `:`;
        (r && (e += `derivative-tangents:`),
          i && (e += `vertex-colors:`),
          a && (e += `flat-shading:`));
        let t = this.cache.get(e);
        (t ||
          ((t = n.clone()),
          i && (t.vertexColors = !0),
          a && (t.flatShading = !0),
          r &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(n))),
          (n = t));
      }
      e.material = n;
    }
    getMaterialType() {
      return j;
    }
    loadMaterial(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.materials[e],
        a,
        o = {},
        s = i.extensions || {},
        l = [];
      if (s[F.KHR_MATERIALS_UNLIT]) {
        let e = r[F.KHR_MATERIALS_UNLIT];
        ((a = e.getMaterialType()), l.push(e.extendParams(o, i, t)));
      } else {
        let n = i.pbrMetallicRoughness || {};
        if (
          ((o.color = new c(1, 1, 1)),
          (o.opacity = 1),
          Array.isArray(n.baseColorFactor))
        ) {
          let e = n.baseColorFactor;
          (o.color.setRGB(e[0], e[1], e[2], w), (o.opacity = e[3]));
        }
        (n.baseColorTexture !== void 0 &&
          l.push(t.assignTexture(o, `map`, n.baseColorTexture, M)),
          (o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor),
          (o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor),
          n.metallicRoughnessTexture !== void 0 &&
            (l.push(
              t.assignTexture(o, `metalnessMap`, n.metallicRoughnessTexture),
            ),
            l.push(
              t.assignTexture(o, `roughnessMap`, n.metallicRoughnessTexture),
            )),
          (a = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e);
          })),
          l.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, o);
              }),
            ),
          ));
      }
      i.doubleSided === !0 && (o.side = 2);
      let u = i.alphaMode || mt.OPAQUE;
      if (
        (u === mt.BLEND
          ? ((o.transparent = !0), (o.depthWrite = !1))
          : ((o.transparent = !1),
            u === mt.MASK &&
              (o.alphaTest = i.alphaCutoff === void 0 ? 0.5 : i.alphaCutoff)),
        i.normalTexture !== void 0 &&
          a !== k &&
          (l.push(t.assignTexture(o, `normalMap`, i.normalTexture)),
          (o.normalScale = new De(1, 1)),
          i.normalTexture.scale !== void 0))
      ) {
        let e = i.normalTexture.scale;
        o.normalScale.set(e, e);
      }
      if (
        (i.occlusionTexture !== void 0 &&
          a !== k &&
          (l.push(t.assignTexture(o, `aoMap`, i.occlusionTexture)),
          i.occlusionTexture.strength !== void 0 &&
            (o.aoMapIntensity = i.occlusionTexture.strength)),
        i.emissiveFactor !== void 0 && a !== k)
      ) {
        let e = i.emissiveFactor;
        o.emissive = new c().setRGB(e[0], e[1], e[2], w);
      }
      return (
        i.emissiveTexture !== void 0 &&
          a !== k &&
          l.push(t.assignTexture(o, `emissiveMap`, i.emissiveTexture, M)),
        Promise.all(l).then(function () {
          let n = new a(o);
          return (
            i.name && (n.name = i.name),
            V(n, i),
            t.associations.set(n, { materials: e }),
            i.extensions && B(r, n, i),
            n
          );
        })
      );
    }
    createUniqueName(e) {
      let t = _e.sanitizeNodeName(e || ``);
      return t in this.nodeNamesUsed
        ? t + `_` + ++this.nodeNamesUsed[t]
        : ((this.nodeNamesUsed[t] = 0), t);
    }
    loadGeometries(e) {
      let t = this,
        n = this.extensions,
        r = this.primitiveCache;
      function i(e) {
        return n[F.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(e, t)
          .then(function (n) {
            return Tt(n, e, t);
          });
      }
      let o = [];
      for (let n = 0, s = e.length; n < s; n++) {
        let s = e[n],
          c = vt(s),
          l = r[c];
        if (l) o.push(l.promise);
        else {
          let e;
          ((e =
            s.extensions && s.extensions[F.KHR_DRACO_MESH_COMPRESSION]
              ? i(s)
              : Tt(new a(), s, t)),
            s.mode === L.TRIANGLE_STRIP
              ? (e = e.then((e) => je(e, 1)))
              : s.mode === L.TRIANGLE_FAN && (e = e.then((e) => je(e, 2))),
            (r[c] = { primitive: s, promise: e }),
            o.push(e));
        }
      }
      return Promise.all(o);
    }
    loadMesh(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.meshes[e],
        a = i.primitives,
        o = [];
      for (let e = 0, t = a.length; e < t; e++) {
        let t =
          a[e].material === void 0
            ? ht(this.cache)
            : this.getDependency(`material`, a[e].material);
        o.push(t);
      }
      return (
        o.push(t.loadGeometries(a)),
        Promise.all(o).then(async function (n) {
          let o = n.slice(0, n.length - 1),
            s = n[n.length - 1],
            c = [];
          for (let n = 0, l = s.length; n < l; n++) {
            let l = s[n],
              u = a[n],
              d,
              f = o[n];
            if (
              u.mode === L.TRIANGLES ||
              u.mode === L.TRIANGLE_STRIP ||
              u.mode === L.TRIANGLE_FAN ||
              u.mode === void 0
            ) {
              let e = i.isSkinnedMesh === !0,
                t = l.hasAttribute(`skinIndex`) && l.hasAttribute(`skinWeight`);
              (e &&
                t === !1 &&
                console.warn(
                  `THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`,
                ),
                (d = e && t ? new Se(l, f) : new O(l, f)),
                d.isSkinnedMesh === !0 && d.normalizeSkinWeights());
            } else if (u.mode === L.LINES) d = new te(l, f);
            else if (u.mode === L.LINE_STRIP) d = new x(l, f);
            else if (u.mode === L.LINE_LOOP) d = new ee(l, f);
            else if (u.mode === L.POINTS) d = new he(l, f);
            else
              throw Error(
                `THREE.GLTFLoader: Primitive mode unsupported: ` + u.mode,
              );
            (Object.keys(d.geometry.morphAttributes).length > 0 && _t(d, i),
              (d.name = t.createUniqueName(i.name || `mesh_` + e)),
              V(d, i),
              u.extensions && B(r, d, u),
              t.assignFinalMaterial(d),
              c.push(d));
          }
          for (let n = 0, r = c.length; n < r; n++)
            t.associations.set(c[n], { meshes: e, primitives: n });
          if (c.length === 1) return (i.extensions && B(r, c[0], i), c[0]);
          let l = new f();
          (i.extensions && B(r, l, i), t.associations.set(l, { meshes: e }));
          for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
          return l;
        })
      );
    }
    loadCamera(e) {
      let t,
        n = this.json.cameras[e],
        r = n[n.type];
      if (!r) {
        console.warn(`THREE.GLTFLoader: Missing camera parameters.`);
        return;
      }
      return (
        n.type === `perspective`
          ? (t = new pe(
              ae.radToDeg(r.yfov),
              r.aspectRatio || 1,
              r.znear || 1,
              r.zfar || 2e6,
            ))
          : n.type === `orthographic` &&
            (t = new fe(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        V(t, n),
        Promise.resolve(t)
      );
    }
    loadSkin(e) {
      let t = this.json.skins[e],
        n = [];
      for (let e = 0, r = t.joints.length; e < r; e++)
        n.push(this._loadNodeShallow(t.joints[e]));
      return (
        t.inverseBindMatrices === void 0
          ? n.push(null)
          : n.push(this.getDependency(`accessor`, t.inverseBindMatrices)),
        Promise.all(n).then(function (e) {
          let n = e.pop(),
            r = e,
            i = [],
            a = [];
          for (let e = 0, o = r.length; e < o; e++) {
            let o = r[e];
            if (o) {
              i.push(o);
              let t = new D();
              (n !== null && t.fromArray(n.array, e * 16), a.push(t));
            } else
              console.warn(
                `THREE.GLTFLoader: Joint "%s" could not be found.`,
                t.joints[e],
              );
          }
          return new xe(i, a);
        })
      );
    }
    loadAnimation(t) {
      let n = this.json,
        r = this,
        i = n.animations[t],
        a = i.name ? i.name : `animation_` + t,
        o = [],
        s = [],
        c = [],
        l = [],
        u = [];
      for (let e = 0, t = i.channels.length; e < t; e++) {
        let t = i.channels[e],
          n = i.samplers[t.sampler],
          r = t.target,
          a = r.node,
          d = i.parameters === void 0 ? n.input : i.parameters[n.input],
          f = i.parameters === void 0 ? n.output : i.parameters[n.output];
        r.node !== void 0 &&
          (o.push(this.getDependency(`node`, a)),
          s.push(this.getDependency(`accessor`, d)),
          c.push(this.getDependency(`accessor`, f)),
          l.push(n),
          u.push(r));
      }
      return Promise.all([
        Promise.all(o),
        Promise.all(s),
        Promise.all(c),
        Promise.all(l),
        Promise.all(u),
      ]).then(function (t) {
        let n = t[0],
          o = t[1],
          s = t[2],
          c = t[3],
          l = t[4],
          u = [];
        for (let e = 0, t = n.length; e < t; e++) {
          let t = n[e],
            i = o[e],
            a = s[e],
            d = c[e],
            f = l[e];
          if (t === void 0) continue;
          t.updateMatrix && t.updateMatrix();
          let p = r._createAnimationTracks(t, i, a, d, f);
          if (p) for (let e = 0; e < p.length; e++) u.push(p[e]);
        }
        let d = new e(a, void 0, u);
        return (V(d, i), d);
      });
    }
    createNodeMesh(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e];
      return r.mesh === void 0
        ? null
        : n.getDependency(`mesh`, r.mesh).then(function (e) {
            let t = n._getNodeRef(n.meshCache, r.mesh, e);
            return (
              r.weights !== void 0 &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = r.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = r.weights[t];
                }),
              t
            );
          });
    }
    loadNode(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e],
        i = n._loadNodeShallow(e),
        a = [],
        o = r.children || [];
      for (let e = 0, t = o.length; e < t; e++)
        a.push(n.getDependency(`node`, o[e]));
      let s =
        r.skin === void 0
          ? Promise.resolve(null)
          : n.getDependency(`skin`, r.skin);
      return Promise.all([i, Promise.all(a), s]).then(function (e) {
        let t = e[0],
          n = e[1],
          r = e[2];
        r !== null &&
          t.traverse(function (e) {
            e.isSkinnedMesh && e.bind(r, St);
          });
        for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
        if (t.userData.pivot !== void 0 && n.length > 0) {
          let e = t.userData.pivot,
            r = n[0];
          ((t.pivot = new N().fromArray(e)),
            (t.position.x -= e[0]),
            (t.position.y -= e[1]),
            (t.position.z -= e[2]),
            r.position.set(0, 0, 0),
            delete t.userData.pivot);
        }
        return t;
      });
    }
    _loadNodeShallow(e) {
      let n = this.json,
        r = this.extensions,
        i = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      let a = n.nodes[e],
        o = a.name ? i.createUniqueName(a.name) : ``,
        s = [],
        c = i._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e);
        });
      return (
        c && s.push(c),
        a.camera !== void 0 &&
          s.push(
            i.getDependency(`camera`, a.camera).then(function (e) {
              return i._getNodeRef(i.cameraCache, a.camera, e);
            }),
          ),
        i
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e);
          })
          .forEach(function (e) {
            s.push(e);
          }),
        (this.nodeCache[e] = Promise.all(s).then(function (n) {
          let s;
          if (
            ((s =
              a.isBone === !0
                ? new t()
                : n.length > 1
                  ? new f()
                  : n.length === 1
                    ? n[0]
                    : new de()),
            s !== n[0])
          )
            for (let e = 0, t = n.length; e < t; e++) s.add(n[e]);
          if (
            (a.name && ((s.userData.name = a.name), (s.name = o)),
            V(s, a),
            a.extensions && B(r, s, a),
            a.matrix !== void 0)
          ) {
            let e = new D();
            (e.fromArray(a.matrix), s.applyMatrix4(e));
          } else
            (a.translation !== void 0 && s.position.fromArray(a.translation),
              a.rotation !== void 0 && s.quaternion.fromArray(a.rotation),
              a.scale !== void 0 && s.scale.fromArray(a.scale));
          if (!i.associations.has(s)) i.associations.set(s, {});
          else if (a.mesh !== void 0 && i.meshCache.refs[a.mesh] > 1) {
            let e = i.associations.get(s);
            i.associations.set(s, { ...e });
          }
          return ((i.associations.get(s).nodes = e), s);
        })),
        this.nodeCache[e]
      );
    }
    loadScene(e) {
      let t = this.extensions,
        n = this.json.scenes[e],
        r = this,
        i = new f();
      (n.name && (i.name = r.createUniqueName(n.name)),
        V(i, n),
        n.extensions && B(t, i, n));
      let a = n.nodes || [],
        o = [];
      for (let e = 0, t = a.length; e < t; e++)
        o.push(r.getDependency(`node`, a[e]));
      return Promise.all(o).then(function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          n.parent === null ? i.add(n) : i.add(Me(n));
        }
        return (
          (r.associations = ((e) => {
            let t = new Map();
            for (let [e, n] of r.associations)
              (e instanceof E || e instanceof Te) && t.set(e, n);
            return (
              e.traverse((e) => {
                let n = r.associations.get(e);
                n != null && t.set(e, n);
              }),
              t
            );
          })(i)),
          i
        );
      });
    }
    _createAnimationTracks(e, t, n, r, i) {
      let a = [],
        o = e.name ? e.name : e.uuid,
        s = [];
      function c(e) {
        e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
      }
      z[i.path] === z.weights
        ? (c(e), e.isGroup && e.children.forEach(c))
        : s.push(o);
      let l;
      switch (z[i.path]) {
        case z.weights:
          l = ue;
          break;
        case z.rotation:
          l = ye;
          break;
        case z.translation:
        case z.scale:
          l = Oe;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              l = ue;
              break;
            default:
              l = Oe;
          }
      }
      let u = r.interpolation === void 0 ? b : pt[r.interpolation],
        d = this._getArrayFromAccessor(n);
      for (let e = 0, n = s.length; e < n; e++) {
        let n = new l(s[e] + `.` + z[i.path], t.array, d, u);
        (r.interpolation === `CUBICSPLINE` &&
          this._createCubicSplineTrackInterpolant(n),
          a.push(n));
      }
      return a;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        let e = bt(t.constructor),
          n = new Float32Array(t.length);
        for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
        t = n;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      ((e.createInterpolant = function (e) {
        return new (this instanceof ye ? ct : ot)(
          this.times,
          this.values,
          this.getValueSize() / 3,
          e,
        );
      }),
        (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
    }
  };
function wt(e, t, r) {
  let i = t.attributes,
    a = new n();
  if (i.POSITION !== void 0) {
    let e = r.json.accessors[i.POSITION],
      t = e.min,
      n = e.max;
    if (t !== void 0 && n !== void 0) {
      if (
        (a.set(new N(t[0], t[1], t[2]), new N(n[0], n[1], n[2])), e.normalized)
      ) {
        let t = bt(R[e.componentType]);
        (a.min.multiplyScalar(t), a.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let o = t.targets;
  if (o !== void 0) {
    let e = new N(),
      t = new N();
    for (let n = 0, i = o.length; n < i; n++) {
      let i = o[n];
      if (i.POSITION !== void 0) {
        let n = r.json.accessors[i.POSITION],
          a = n.min,
          o = n.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            n.normalized)
          ) {
            let e = bt(R[n.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    a.expandByVector(e);
  }
  e.boundingBox = a;
  let s = new Ce();
  (a.getCenter(s.center),
    (s.radius = a.min.distanceTo(a.max) / 2),
    (e.boundingSphere = s));
}
function Tt(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = ft[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    l.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${l.workingColorSpace}" not supported.`,
      ),
    V(e, t),
    wt(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : gt(e, t.targets, n);
    })
  );
}
var Et = (function () {
  var e = `b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,
    t = `b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,
    n = new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0,
      1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7,
      0, 65, 0, 253, 15, 26, 11,
    ]),
    r = new Uint8Array([
      32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15,
      116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24,
      23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136,
      108, 28, 118, 29, 73, 115,
    ]);
  if (typeof WebAssembly != `object`) return { supported: !1 };
  var i = WebAssembly.validate(n) ? s(t) : s(e),
    a,
    o = WebAssembly.instantiate(i, {}).then(function (e) {
      ((a = e.instance), a.exports.__wasm_call_ctors());
    });
  function s(e) {
    for (var t = new Uint8Array(e.length), n = 0; n < e.length; ++n) {
      var i = e.charCodeAt(n);
      t[n] = i > 96 ? i - 97 : i > 64 ? i - 39 : i + 4;
    }
    for (var a = 0, n = 0; n < e.length; ++n)
      t[a++] = t[n] < 60 ? r[t[n]] : (t[n] - 60) * 64 + t[++n];
    return t.buffer.slice(0, a);
  }
  function c(e, t, n, r, i, a, o) {
    var s = e.exports.sbrk,
      c = (r + 3) & -4,
      l = s(c * i),
      u = s(a.length),
      d = new Uint8Array(e.exports.memory.buffer);
    d.set(a, u);
    var f = t(l, r, i, u, a.length);
    if (
      (f == 0 && o && o(l, c, i),
      n.set(d.subarray(l, l + r * i)),
      s(l - s(0)),
      f != 0)
    )
      throw Error(`Malformed buffer data: ` + f);
  }
  var l = {
      NONE: ``,
      OCTAHEDRAL: `meshopt_decodeFilterOct`,
      QUATERNION: `meshopt_decodeFilterQuat`,
      EXPONENTIAL: `meshopt_decodeFilterExp`,
      COLOR: `meshopt_decodeFilterColor`,
    },
    u = {
      ATTRIBUTES: `meshopt_decodeVertexBuffer`,
      TRIANGLES: `meshopt_decodeIndexBuffer`,
      INDICES: `meshopt_decodeIndexSequence`,
    },
    d = [],
    f = 0;
  function p(e) {
    var t = { object: new Worker(e), pending: 0, requests: {} };
    return (
      (t.object.onmessage = function (e) {
        var n = e.data;
        ((t.pending -= n.count),
          t.requests[n.id][n.action](n.value),
          delete t.requests[n.id]);
      }),
      t
    );
  }
  function m(e) {
    for (
      var t =
          `self.ready = WebAssembly.instantiate(new Uint8Array([` +
          new Uint8Array(i) +
          `]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = ` +
          g.name +
          `;` +
          c.toString() +
          g.toString(),
        n = new Blob([t], { type: `text/javascript` }),
        r = URL.createObjectURL(n),
        a = d.length;
      a < e;
      ++a
    )
      d[a] = p(r);
    for (var a = e; a < d.length; ++a) d[a].object.postMessage({});
    ((d.length = e), URL.revokeObjectURL(r));
  }
  function h(e, t, n, r, i) {
    for (var a = d[0], o = 1; o < d.length; ++o)
      d[o].pending < a.pending && (a = d[o]);
    return new Promise(function (o, s) {
      var c = new Uint8Array(n),
        l = ++f;
      ((a.pending += e),
        (a.requests[l] = { resolve: o, reject: s }),
        a.object.postMessage(
          { id: l, count: e, size: t, source: c, mode: r, filter: i },
          [c.buffer],
        ));
    });
  }
  function g(e) {
    var t = e.data;
    self.ready.then(function (e) {
      if (!t.id) return self.close();
      try {
        var n = new Uint8Array(t.count * t.size);
        (c(
          e,
          e.exports[t.mode],
          n,
          t.count,
          t.size,
          t.source,
          e.exports[t.filter],
        ),
          self.postMessage(
            { id: t.id, count: t.count, action: `resolve`, value: n },
            [n.buffer],
          ));
      } catch (e) {
        self.postMessage({
          id: t.id,
          count: t.count,
          action: `reject`,
          value: e,
        });
      }
    });
  }
  return {
    ready: o,
    supported: !0,
    useWorkers: function (e) {
      m(e);
    },
    decodeVertexBuffer: function (e, t, n, r, i) {
      c(a, a.exports.meshopt_decodeVertexBuffer, e, t, n, r, a.exports[l[i]]);
    },
    decodeIndexBuffer: function (e, t, n, r) {
      c(a, a.exports.meshopt_decodeIndexBuffer, e, t, n, r);
    },
    decodeIndexSequence: function (e, t, n, r) {
      c(a, a.exports.meshopt_decodeIndexSequence, e, t, n, r);
    },
    decodeGltfBuffer: function (e, t, n, r, i, o) {
      c(a, a.exports[u[i]], e, t, n, r, a.exports[l[o]]);
    },
    decodeGltfBufferAsync: function (e, t, n, r, i) {
      return d.length > 0
        ? h(e, t, n, u[r], l[i])
        : o.then(function () {
            var o = new Uint8Array(e * t);
            return (c(a, a.exports[u[r]], o, e, t, n, a.exports[l[i]]), o);
          });
    },
  };
})();
function H(e, t) {
  let r = new f(),
    i = new f();
  (r.add(i), i.add(e), i.updateMatrixWorld(!0));
  let a = new n().setFromObject(i),
    o = a.getSize(new N());
  ((i.rotation.y = (o.x > o.z ? Math.PI / 2 : 0) + t.yaw),
    i.updateMatrixWorld(!0));
  let s = [],
    c = [];
  e.traverse((e) => {
    if (!(e instanceof O)) return;
    let t = Array.isArray(e.material) ? e.material : [e.material],
      r = `${e.name} ${t.map((e) => e.name).join(` `)}`.toLowerCase(),
      i = new n().setFromObject(e).getCenter(new N()).z;
    /tail|rear_light|red_glass|glassred|lightglass_red|exhaust/.test(r)
      ? c.push(i)
      : /headlight|daylight|head_light/.test(r) && s.push(i);
  });
  let l = (e) => e.reduce((e, t) => e + t, 0) / e.length,
    u = new n().setFromObject(i).getCenter(new N()).z;
  (t.yaw === 0 &&
    (c.length ? (s.length ? l(s) > l(c) : l(c) < u) : !s.length || l(s) > u) &&
    (i.rotation.y += Math.PI),
    i.updateMatrixWorld(!0),
    a.setFromObject(i),
    i.scale.setScalar(t.length / Math.max(a.getSize(o).z, 1e-6)),
    i.updateMatrixWorld(!0),
    a.setFromObject(i));
  let d = a.getCenter(new N());
  return (i.position.set(-d.x, -a.min.y, -d.z), r.updateMatrixWorld(!0), r);
}
function Dt(e) {
  let t = e.children.find(
    (e) =>
      e.isMesh &&
      !Array.isArray(e.material) &&
      /2024Paint_Material$/.test(e.material.name) &&
      !e.geometry.index,
  );
  if (!t) return null;
  let n = t.geometry.getAttribute(`position`),
    o = n.count / 3,
    s = new Int32Array(o).map((e, t) => t),
    c = (e) => {
      for (; s[e] !== e;) e = s[e] = s[s[e]];
      return e;
    },
    l = new Map();
  for (let e = 0; e < n.count; e++) {
    let t = `${Math.round(n.getX(e) * 2e3)},${Math.round(n.getY(e) * 2e3)},${Math.round(n.getZ(e) * 2e3)}`,
      r = Math.floor(e / 3),
      i = l.get(t);
    if (i === void 0) l.set(t, r);
    else {
      let e = c(i),
        t = c(r);
      e !== t && (s[e] = t);
    }
  }
  let u = new Map(),
    d = new N();
  for (let e = 0; e < o; e++) {
    let t = c(e),
      r = u.get(t);
    (r ||
      u.set(
        t,
        (r = {
          tris: [],
          min: new N(1 / 0, 1 / 0, 1 / 0),
          max: new N(-1 / 0, -1 / 0, -1 / 0),
        }),
      ),
      r.tris.push(e));
    for (let t = 0; t < 3; t++)
      (d.fromBufferAttribute(n, e * 3 + t), r.min.min(d), r.max.max(d));
  }
  let p = new Set(),
    m = new N(1 / 0, 1 / 0, 1 / 0);
  for (let e of u.values())
    if (
      e.tris.length > 300 &&
      e.min.z > 1.85 &&
      e.min.y > 0.78 &&
      e.max.x - e.min.x > 1.2
    ) {
      for (let t of e.tris) p.add(t);
      m.min(e.min);
    }
  if (!p.size) return null;
  let h = (e) => {
      let n = [];
      for (let t = 0; t < o; t++)
        p.has(t) !== e && n.push(t * 3, t * 3 + 1, t * 3 + 2);
      let r = new a();
      for (let [e, a] of Object.entries(t.geometry.attributes)) {
        let t = a,
          o = new Float32Array(n.length * t.itemSize);
        (n.forEach((e, n) => {
          for (let r = 0; r < t.itemSize; r++)
            o[n * t.itemSize + r] = t.getComponent(e, r);
        }),
          r.setAttribute(e, new i(o, t.itemSize)));
      }
      return (r.computeBoundingSphere(), r);
    },
    g = t.geometry,
    _ = h(!1);
  ((t.geometry = h(!0)), g.dispose());
  let v = new N(0, m.y, m.z);
  _.translate(-v.x, -v.y, -v.z);
  let y = new O(_, t.material);
  ((y.name = t.name), (y.castShadow = !0));
  let b = new f();
  ((b.name = `active-wing`), b.position.copy(v), b.add(y));
  let x = new j({ color: 1710878, metalness: 0.7, roughness: 0.35 });
  for (let e of [-0.42, 0.42]) {
    let t = new O(new r(0.03, 0.1, 0.06), x);
    (t.position.set(e, -0.03, 0.16), b.add(t));
  }
  return (e.add(b), b);
}
function Ot(e) {
  let t = e.name.toLowerCase();
  return (t !== `palettematerial004` &&
    !/window|windshield|windscreen/.test(t)) ||
    !(e instanceof j)
    ? !1
    : (e.color.setHex(0),
      (e.map = null),
      (e.alphaMap = null),
      (e.transparent = !1),
      (e.opacity = 1),
      (e.depthWrite = !0),
      (e.metalness = 0),
      (e.roughness = 0.8),
      (e.envMapIntensity = 0),
      e instanceof A &&
        ((e.transmission = 0),
        (e.clearcoat = 0),
        (e.clearcoatRoughness = 0.08)),
      (e.needsUpdate = !0),
      !0);
}
var U = { color: 725012, opacity: 0.2, metalness: 0, roughness: 0.03 };
function W(e) {
  let t = e;
  (t.color?.setHex(U.color),
    `metalness` in t && (t.metalness = U.metalness),
    `roughness` in t && (t.roughness = U.roughness),
    (t.map = null),
    (t.transparent = !0),
    (t.opacity = U.opacity),
    (t.depthWrite = !1),
    (t.side = 2));
  let n = t;
  (`transmission` in n && (n.transmission = 0), (t.needsUpdate = !0));
}
function kt(e) {
  let t = [];
  e.traverse((e) => {
    /GlassInside/i.test(e.name) && t.push(e);
  });
  for (let e of t) e.removeFromParent();
  e.traverse((e) => {
    let t = e;
    if (t.isMesh)
      for (let e of Array.isArray(t.material) ? t.material : [t.material])
        e?.name === `Window` && W(e);
  });
}
var At = /Window_Material1$/;
function jt(e) {
  let t = [];
  e.traverse((e) => {
    let n = e;
    !n.isMesh ||
      Array.isArray(n.material) ||
      (/WindowInside/i.test(`${e.name}|${e.parent?.name ?? ``}`) &&
        At.test(n.material.name) &&
        t.push(e));
  });
  for (let e of t) e.removeFromParent();
  e.traverse((e) => {
    let t = e;
    if (t.isMesh)
      for (let e of Array.isArray(t.material) ? t.material : [t.material])
        e && At.test(e.name) && W(e);
  });
}
var Mt = `svj_glow_pos`,
  Nt = `svj_glow_back`,
  Pt = `svj_glow_brake`;
function Ft(e) {
  switch (e) {
    case `LightEmissiveWhite`:
      return Mt;
    case `GlassRedLights`:
      return Nt;
    case `GlassOrangeLights`:
      return Pt;
    case `CARROSSERIE`:
      return `svj_paint`;
    case `WheelTireBump`:
      return `svj_tyre`;
    case `WheelMetalBlack`:
      return `svj_rim`;
    case `Material.005`:
      return `svj_rotor`;
    case `Material.006`:
      return `svj_wheel_hub`;
    case `Material.004`:
    case `MetalRedEngine`:
      return `svj_caliper`;
    default:
      return null;
  }
}
function It(e) {
  let t = new Map();
  e.traverse((e) => {
    let n = e;
    if (!n.isMesh || Array.isArray(n.material)) return;
    let r = n.material,
      i = Ft(r.name);
    if (!i) return;
    let a = t.get(r);
    if (!a) {
      let e = r.clone();
      ((e.name = i),
        i.startsWith(`svj_glow`) &&
          (e.emissive?.set(0), (e.emissiveIntensity = 0)),
        i === `svj_glow_brake` && e.color.set(3802116),
        (a = e),
        t.set(r, a));
    }
    n.material = a;
  });
}
function G(e) {
  let t = Math.floor(e.length / 3),
    n = 0,
    r = 0,
    i = 0;
  for (let a = 0; a < t; a++)
    ((n += e[a * 3]), (r += e[a * 3 + 1]), (i += e[a * 3 + 2]));
  ((n /= Math.max(1, t)), (r /= Math.max(1, t)), (i /= Math.max(1, t)));
  let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let o = 0; o < t; o++) {
    let t = [e[o * 3] - n, e[o * 3 + 1] - r, e[o * 3 + 2] - i];
    for (let e = 0; e < 3; e++)
      for (let n = 0; n < 3; n++) a[e * 3 + n] += t[e] * t[n];
  }
  let o = a[0] + a[4] + a[8],
    s = a.map((e, t) => (t % 4 == 0 ? o - e : -e)),
    c = new N(1, 0.13, 0.07).normalize();
  for (let e = 0; e < 80; e++)
    c = new N(
      s[0] * c.x + s[1] * c.y + s[2] * c.z,
      s[3] * c.x + s[4] * c.y + s[5] * c.z,
      s[6] * c.x + s[7] * c.y + s[8] * c.z,
    ).normalize();
  return c.x < 0 ? c.negate() : c;
}
var Lt = ae.degToRad(1.5);
function Rt(e, t = {}) {
  let r = new Map();
  e.traverse((e) => {
    let t = e;
    if (!t.isMesh || !t.userData.wheel) return;
    let n = /_([LR][FR])$/.exec(t.name)?.[1];
    n && r.set(n, [...(r.get(n) ?? []), t]);
  });
  let i = new N(1, 0, 0),
    a = new n(),
    o = (e) => (
      e.geometry.computeBoundingBox(),
      e.geometry.boundingBox.clone().translate(e.position)
    );
  for (let e of r.values()) {
    let n = (e) => o(e).getSize(new N()),
      r = e.reduce((e, t) => (n(t).y * n(t).z > n(e).y * n(e).z ? t : e)),
      s = o(r).getCenter(new N());
    if (t.straighten) {
      let t = G(r.geometry.getAttribute(`position`).array);
      if (t.angleTo(i) > Lt) {
        let n = new ve().setFromUnitVectors(t, i);
        for (let t of e) {
          let e = t.geometry;
          (e.translate(
            t.position.x - s.x,
            t.position.y - s.y,
            t.position.z - s.z,
          ),
            e.applyQuaternion(n),
            e.translate(s.x, s.y, s.z),
            t.position.set(0, 0, 0));
        }
        s = o(r).getCenter(new N());
      }
    }
    a.makeEmpty();
    for (let t of e) a.union(o(t));
    let c = Math.max(0.2, Math.max(a.max.y - a.min.y, a.max.z - a.min.z) / 2);
    for (let t of e) {
      let e = t.geometry;
      (e.translate(t.position.x - s.x, t.position.y - s.y, t.position.z - s.z),
        e.computeBoundingBox(),
        e.computeBoundingSphere(),
        t.position.copy(s),
        (t.userData.radius = c));
    }
  }
}
var K = {
    revuelto: { eye: [-0.4, 0.98, 0.1] },
    "huracan-evo": { eye: [-0.36, 0.98, 0.1] },
    laferrari: { eye: [-0.33, 0.96, 0.1] },
    chiron: { eye: [-0.38, 1.02, 0.1] },
    tourbillon: { eye: [-0.38, 1, 0.1] },
    "voiture-noire": { eye: [-0.36, 1, 0.2] },
    "chiron-ss300": { eye: [-0.38, 0.97, 0.03] },
    jesko: { eye: [-0.31, 0.93, 0.08] },
    "utopia-roadster": { eye: [-0.33, 1, 0.15] },
    huayra: { eye: [-0.4, 1, 0.15] },
    "m8-competition": { eye: [-0.38, 1.1, 0.3] },
    "m4-competition": { eye: [-0.38, 1.12, 0.3] },
  },
  zt = (e) => K[e] !== void 0,
  Bt = { "chiron-ss300": { node: /(^|\|)SteeringWheel_/ } };
function Vt(e, t, n) {
  let r = Bt[e];
  return r ? (r.node?.test(t) ?? !1) || (r.material?.test(n) ?? !1) : !1;
}
var Ht = 1.75;
function Ut(e) {
  return Math.max(-1, Math.min(1, e)) * Ht;
}
var q = { x: 0.34, yLow: -0.7, yHigh: 0.05, zNear: -0.12, zFar: -1 },
  Wt = 0.205,
  J = { min: 0.27, max: 0.47, offCentre: 0.14, maxDepth: 0.24, slice: 0.2 },
  Y = 0.36;
function Gt(e) {
  let [t, n, r] = e;
  return (
    r < 0 && ([t, n, r] = [-t, -n, -r]),
    Math.abs(t) < 0.25 && r > 0.7 && n > 0.05 && n < 0.72
      ? [t, n, r]
      : [0, Math.sin(Y), Math.cos(Y)]
  );
}
function Kt(e, t, n) {
  let [r, i, a] = t,
    o = (e, t, n) =>
      Math.abs(e - r) < q.x &&
      t > i + q.yLow &&
      t < i + q.yHigh &&
      n < a + q.zNear &&
      n > a + q.zFar,
    s = [];
  if (
    (e.forEach((e, t) => {
      let n = Math.floor(e.length / 9);
      for (let r = 0; r < n; r++) {
        let n = !0;
        for (let t = 0; t < 3 && n; t++) {
          let i = r * 9 + t * 3;
          n = o(e[i], e[i + 1], e[i + 2]);
        }
        n && s.push({ mesh: t, tri: r });
      }
    }),
    s.length < 40)
  )
    return null;
  let c = s.map((e, t) => t),
    l = (e) => {
      for (; c[e] !== e;) e = c[e] = c[c[e]];
      return e;
    },
    u = new Map();
  s.forEach(({ mesh: t, tri: n }, r) => {
    let i = e[t];
    for (let e = 0; e < 3; e++) {
      let t = n * 9 + e * 3,
        a = `${Math.round(i[t] / 0.0015)},${Math.round(i[t + 1] / 0.0015)},${Math.round(i[t + 2] / 0.0015)}`,
        o = u.get(a);
      o === void 0 ? u.set(a, r) : (c[l(r)] = l(o));
    }
  });
  let d = new Map();
  s.forEach((e, t) => {
    let n = l(t),
      r = d.get(n);
    (r || d.set(n, (r = [])), r.push(t));
  });
  let f = (t) => {
      let n = new Float32Array(t.length * 9);
      return (
        t.forEach((t, r) => {
          let { mesh: i, tri: a } = s[t],
            o = e[i];
          for (let e = 0; e < 9; e++) n[r * 9 + e] = o[a * 9 + e];
        }),
        n
      );
    },
    p = (e) => {
      let t = [1 / 0, 1 / 0, 1 / 0],
        n = [-1 / 0, -1 / 0, -1 / 0];
      for (let r = 0; r < e.length; r += 3)
        for (let i = 0; i < 3; i++)
          ((t[i] = Math.min(t[i], e[r + i])),
            (n[i] = Math.max(n[i], e[r + i])));
      return { mn: t, mx: n };
    },
    m = null;
  for (let t of d.values()) {
    if (t.length < 24) continue;
    let i = t,
      a = f(i),
      { mn: o, mx: c } = p(a);
    if (c[2] - o[2] > J.maxDepth) {
      let t = c[2] - J.slice;
      if (
        ((i = i.filter((n) => {
          let { mesh: r, tri: i } = s[n],
            a = e[r];
          return a[i * 9 + 2] > t && a[i * 9 + 5] > t && a[i * 9 + 8] > t;
        })),
        i.length < 24)
      )
        continue;
      ((a = f(i)), ({ mn: o, mx: c } = p(a)));
    }
    let l = c[0] - o[0],
      u = c[1] - o[1];
    n?.push({
      n: i.length,
      mn: o.map((e) => +e.toFixed(3)),
      mx: c.map((e) => +e.toFixed(3)),
    });
    let d = (o[0] + c[0]) / 2;
    if (
      l < J.min ||
      l > J.max ||
      u < J.min * 0.8 ||
      u > J.max ||
      Math.abs(d - r) > J.offCentre ||
      c[2] - o[2] > J.maxDepth
    )
      continue;
    let h = (o[1] + c[1]) / 2,
      g = 0;
    for (let e = 0; e < a.length; e += 3)
      Math.hypot((a[e] - d) / (l / 2), (a[e + 1] - h) / (u / 2)) > 0.7 && g++;
    let _ = (g / (a.length / 3)) * Math.log(i.length);
    g / (a.length / 3) > 0.45 &&
      (!m || _ > m.score) &&
      (m = { ids: i, v: a, score: _ });
  }
  if (!m) return qt(s, e, d, f, p, t);
  let h = G(m.v),
    [g, _, v] = Gt([h.x, h.y, h.z]),
    y = { x: g, y: _, z: v },
    { mn: b, mx: x } = p(m.v),
    S = [(b[0] + x[0]) / 2, (b[1] + x[1]) / 2, (b[2] + x[2]) / 2],
    ee = Math.max(x[0] - b[0], x[1] - b[1]) / 2 + 0.02,
    te = (e) => {
      for (let t = 0; t < e.length; t += 3) {
        let n = [e[t] - S[0], e[t + 1] - S[1], e[t + 2] - S[2]],
          r = n[0] * y.x + n[1] * y.y + n[2] * y.z,
          i = Math.sqrt(Math.max(0, n[0] ** 2 + n[1] ** 2 + n[2] ** 2 - r * r));
        if (Math.abs(r) > 0.075 || i > ee) return !1;
      }
      return !0;
    },
    ne = [...m.ids],
    re = new Set(m.ids);
  for (let e of d.values())
    re.has(e[0]) || e.some((e) => re.has(e)) || (te(f(e)) && ne.push(...e));
  let C = new Map();
  for (let e of ne) {
    let { mesh: t, tri: n } = s[e],
      r = C.get(t);
    (r || C.set(t, (r = [])), r.push(n));
  }
  return { tris: C, axis: [g, _, v], center: [S[0], S[1], S[2]] };
}
function qt(e, t, n, r, i, a) {
  let [o, s, c] = a,
    l = null;
  for (let e of n.values()) {
    if (e.length < 200) continue;
    let { mn: t, mx: n } = i(r(e)),
      a = n[0] - t[0],
      u = n[1] - t[1],
      d = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2, (t[2] + n[2]) / 2];
    a < 0.1 ||
      a > 0.26 ||
      u < 0.1 ||
      u > 0.26 ||
      Math.abs(d[0] - o) > 0.1 ||
      d[1] > s - 0.12 ||
      d[1] < s - 0.45 ||
      d[2] > c - 0.3 ||
      d[2] < c - 0.8 ||
      ((!l || e.length > l.n) &&
        (l = { c: d, r: Math.max(a, u) / 2, n: e.length }));
  }
  if (!l) return null;
  let u = [0, Math.sin(Y), Math.cos(Y)],
    d = l.r * 0.95,
    f = Wt,
    p = new Map(),
    m = 0;
  for (let { mesh: n, tri: r } of e) {
    let e = t[n],
      i = !0;
    for (let t = 0; t < 3 && i; t++) {
      let n = r * 9 + t * 3,
        a = [e[n] - l.c[0], e[n + 1] - l.c[1], e[n + 2] - l.c[2]],
        o = a[0] * u[0] + a[1] * u[1] + a[2] * u[2],
        s = Math.sqrt(Math.max(0, a[0] ** 2 + a[1] ** 2 + a[2] ** 2 - o * o));
      i = Math.abs(o) < 0.06 && s > d && s < f;
    }
    if (!i) continue;
    let a = p.get(n);
    (a || p.set(n, (a = [])), a.push(r), m++);
  }
  return m < 60 ? null : { tris: p, axis: u, center: [l.c[0], l.c[1], l.c[2]] };
}
var Jt = {
    chiron: {
      url: {
        version: 1,
        asset_id: `6a3ce9e3-c41a-4bed-aa7b-4690965e338e`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/6626d9c5-9192-42db-8398-5d210b3cef58/chiron-playable.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/6a3ce9e3-c41a-4bed-aa7b-4690965e338e/chiron-playable.glb`,
        original_filename: `chiron-playable.glb`,
        size: 3173708,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:05Z`,
      }.url,
      length: 4.54,
      yaw: Math.PI,
    },
    revuelto: {
      url: {
        version: 1,
        asset_id: `d439d350-e970-4c89-a7e8-ae180b901647`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/caa4d48a-f47b-4a3e-abf5-7dda4fc51b6c/revuelto-2024.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/d439d350-e970-4c89-a7e8-ae180b901647/revuelto-2024.glb`,
        original_filename: `revuelto-2024.glb`,
        size: 3490252,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:22Z`,
      }.url,
      length: 4.95,
      yaw: 0,
    },
    "huracan-evo": {
      url: {
        version: 1,
        asset_id: `897b97c8-5ee1-40d7-97a5-b5497a703a69`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/b38d13f7-9089-4c05-bea8-e3ededdd2b84/2019_lamborghini_huracan_evo.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/897b97c8-5ee1-40d7-97a5-b5497a703a69/2019_lamborghini_huracan_evo.glb`,
        original_filename: `2019_lamborghini_huracan_evo.glb`,
        size: 14314104,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:28Z`,
      }.url,
      length: 4.52,
      yaw: 0,
    },
    tourbillon: {
      url: {
        version: 1,
        asset_id: `cadbb6bf-cb1f-4f69-9a9d-69dd8301bf2b`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/5d1bc79d-ddd6-49e6-bbc1-f76e609fbb51/2026_bugatti_tourbillon.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/cadbb6bf-cb1f-4f69-9a9d-69dd8301bf2b/2026_bugatti_tourbillon.glb`,
        original_filename: `2026_bugatti_tourbillon.glb`,
        size: 20030372,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:59:23Z`,
      }.url,
      length: 4.67,
      yaw: 0,
    },
    "utopia-roadster": {
      url: {
        version: 1,
        asset_id: `51fdd9f4-1417-4d85-a0ed-354924d983b1`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/1aad034c-b6d1-4146-8a5a-b379ae45cdbc/2025_pagani_utopia_roadster.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/51fdd9f4-1417-4d85-a0ed-354924d983b1/2025_pagani_utopia_roadster.glb`,
        original_filename: `2025_pagani_utopia_roadster.glb`,
        size: 20176408,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:46Z`,
      }.url,
      length: 4.62,
      yaw: 0,
    },
    huayra: {
      url: {
        version: 1,
        asset_id: `e1c1b627-193a-4869-8888-7ae986d722d1`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/b5f20349-36da-491f-acb8-70913c3a2bee/pagani_huayra_free.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/e1c1b627-193a-4869-8888-7ae986d722d1/pagani_huayra_free.glb`,
        original_filename: `pagani_huayra_free.glb`,
        size: 12499188,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T03:00:23Z`,
      }.url,
      length: 4.6,
      yaw: 0,
    },
    demon: {
      url: {
        version: 1,
        asset_id: `5c0cef57-c71c-4fbe-961e-bc434ac70c34`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/ab7f62d0-2d0c-4153-a79f-e4656bb9f1c9/dodge_challenger_srt_demon_sdc.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/5c0cef57-c71c-4fbe-961e-bc434ac70c34/dodge_challenger_srt_demon_sdc.glb`,
        original_filename: `dodge_challenger_srt_demon_sdc.glb`,
        size: 20177740,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:59:29Z`,
      }.url,
      length: 5.02,
      yaw: 0,
    },
    "chiron-ss300": {
      url: {
        version: 1,
        asset_id: `3dcfaed5-904a-41e3-a4aa-243a917db7fe`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/eb9a2cda-5a2c-4613-a72e-f27592b1bf8b/bugatti_chiron_super_sport_300.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/3dcfaed5-904a-41e3-a4aa-243a917db7fe/bugatti_chiron_super_sport_300.glb`,
        original_filename: `bugatti_chiron_super_sport_300.glb`,
        size: 10610268,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:39Z`,
      }.url,
      length: 4.62,
      yaw: 0,
    },
    laferrari: {
      url: {
        version: 1,
        asset_id: `63c39cf9-43e1-4982-9fbc-ec663e856b14`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/a9848846-74a3-49ca-b02f-3d60ce1c9ee2/2014_ferrari_laferrari.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/63c39cf9-43e1-4982-9fbc-ec663e856b14/2014_ferrari_laferrari.glb`,
        original_filename: `2014_ferrari_laferrari.glb`,
        size: 7930216,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:59:11Z`,
      }.url,
      length: 4.7,
      yaw: 0,
    },
    svj: {
      url: {
        version: 1,
        asset_id: `ce376e74-7d8e-43b1-bbe2-57c38da54a99`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/b7dd6a17-ccac-4948-b50f-7e6568f42de6/aventador_svj_sdc.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ce376e74-7d8e-43b1-bbe2-57c38da54a99/aventador_svj_sdc.glb`,
        original_filename: `aventador_svj_sdc.glb`,
        size: 6111596,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:19Z`,
      }.url,
      length: 4.943,
      yaw: Math.PI,
    },
    "m4-competition": {
      url: {
        version: 1,
        asset_id: `3f1d9eef-ab84-4cf0-b38c-18325074da99`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/709fc446-06a0-4ebd-9222-28beed736fa5/2025_bmw_m4_competition.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/3f1d9eef-ab84-4cf0-b38c-18325074da99/2025_bmw_m4_competition.glb`,
        original_filename: `2025_bmw_m4_competition.glb`,
        size: 1950068,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:01Z`,
      }.url,
      length: 4.794,
      yaw: Math.PI,
    },
    "m8-competition": {
      url: {
        version: 1,
        asset_id: `c57eba7a-6b0d-48f9-b4f4-f5fe481a9b8f`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/73dee70a-8ffa-4d55-80b1-d1966fc41e3f/bmw-m8-competition-v2.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/c57eba7a-6b0d-48f9-b4f4-f5fe481a9b8f/bmw-m8-competition-v2.glb`,
        original_filename: `bmw-m8-competition-v2.glb`,
        size: 2588880,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:34Z`,
      }.url,
      length: 4.867,
      yaw: Math.PI,
    },
    jesko: {
      url: {
        version: 1,
        asset_id: `498ca241-c58e-4395-b152-86244c7a5fc5`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/9c49fcad-0282-4704-8a08-f59988af0cc7/2019_koenigsegg_jesko.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/498ca241-c58e-4395-b152-86244c7a5fc5/2019_koenigsegg_jesko.glb`,
        original_filename: `2019_koenigsegg_jesko.glb`,
        size: 2690800,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:58:16Z`,
      }.url,
      length: 4.61,
      yaw: Math.PI,
    },
    "voiture-noire": {
      url: {
        version: 1,
        asset_id: `f03426a7-4d66-4a0e-897c-a6724d055c02`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/764f0fd3-35d6-4a1f-9e1c-d3f091b33961/2019_bugatti_la_voiture_noire.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/f03426a7-4d66-4a0e-897c-a6724d055c02/2019_bugatti_la_voiture_noire.glb`,
        original_filename: `2019_bugatti_la_voiture_noire.glb`,
        size: 2511756,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:57:58Z`,
      }.url,
      length: 4.544,
      yaw: Math.PI,
    },
    "mustang-rtr": {
      url: {
        version: 1,
        asset_id: `ca9c2e58-7449-4b9e-b330-b0d2752be8ff`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/92fac146-57fe-4a80-9948-1ef2c65849e9/mustang_rtr_spec5.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ca9c2e58-7449-4b9e-b330-b0d2752be8ff/mustang_rtr_spec5.glb`,
        original_filename: `mustang_rtr_spec5.glb`,
        size: 3028312,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:59:41Z`,
      }.url,
      length: 4.79,
      yaw: 0,
    },
    m2: {
      url: {
        version: 1,
        asset_id: `d01727c6-056b-411d-8fca-4ef670a19eb1`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/3fd3f901-65ab-4e2c-8b0c-5a3c3c3ed1b2/bmw_m2_g87.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/d01727c6-056b-411d-8fca-4ef670a19eb1/bmw_m2_g87.glb`,
        original_filename: `bmw_m2_g87.glb`,
        size: 3141100,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T03:00:13Z`,
      }.url,
      length: 4.58,
      yaw: 0,
    },
    "police-aventador": {
      url: {
        version: 1,
        asset_id: `8c3fc96e-033b-4db5-9863-55e767b7c996`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/4caff8c3-8172-45c5-b096-cc38dc109c2b/police_aventador.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/8c3fc96e-033b-4db5-9863-55e767b7c996/police_aventador.glb`,
        original_filename: `police_aventador.glb`,
        size: 1668840,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:59:18Z`,
      }.url,
      length: 4.78,
      yaw: 0,
    },
    mustang: {
      url: {
        version: 1,
        asset_id: `369e2589-0966-4b1e-813b-14f3b3d7844d`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/9ab30532-cc6c-45c0-b26e-b8218c3f1ede/mustang-gt-traffic.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/369e2589-0966-4b1e-813b-14f3b3d7844d/mustang-gt-traffic.glb`,
        original_filename: `mustang-gt-traffic.glb`,
        size: 427300,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:45:05Z`,
      }.url,
      length: 4.8,
      yaw: 0,
    },
    bmw: {
      url: {
        version: 1,
        asset_id: `a848b6b7-61ce-4821-8e0b-6cbb584d66de`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/01afcbdb-6997-491e-adf0-a51e7b6802e4/bmw-m4-traffic.glb`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/a848b6b7-61ce-4821-8e0b-6cbb584d66de/bmw-m4-traffic.glb`,
        original_filename: `bmw-m4-traffic.glb`,
        size: 677864,
        content_type: `model/gltf-binary`,
        created_at: `2026-11-19T02:44:34Z`,
      }.url,
      length: 4.8,
      yaw: 0,
    },
    porsche: {
      url: `/__l5e/assets-v1/ab06ba3c-d154-44df-8b5b-5075ce12013b/ga-porsche-gt3-traffic.glb`,
      length: 4.57,
      yaw: Math.PI,
    },
    bugatti: {
      url: `/__l5e/assets-v1/1f153409-3370-4ef7-aeb7-2ce472e1b993/ga-bugatti-chiron-traffic.glb`,
      length: 4.54,
      yaw: Math.PI,
    },
    ferrari: {
      url: `/__l5e/assets-v1/45d619d4-2e2b-4c55-aa89-3a6ec1440b3a/ga-ferrari-sf90-traffic.glb`,
      length: 4.71,
      yaw: Math.PI,
    },
    hatch: { url: `/__l5e/assets-v1/2ed5e127-9dfc-46bb-938c-8e0f3bc171cb/ga-traffic-hatch.glb`, length: 4.1, yaw: Math.PI },
    sedan: { url: `/__l5e/assets-v1/ed889ea7-c467-4a5c-b0ce-cb8d67418f7c/ga-traffic-sedan.glb`, length: 4.7, yaw: Math.PI },
    suv: { url: `/__l5e/assets-v1/630d9c1a-1f6a-493c-ac1a-8b96e61c22ca/ga-traffic-suv.glb`, length: 4.65, yaw: Math.PI },
    pickup: {
      url: `/__l5e/assets-v1/077181ae-3749-444c-aee1-d36ed266fa09/ga-traffic-pickup.glb`,
      length: 5.3,
      yaw: Math.PI,
    },
    bus: { url: `/__l5e/assets-v1/e0ee7629-9512-447c-91c5-745fcdb4e786/ga-traffic-bus.glb`, length: 12, yaw: Math.PI },
    truck: {
      url: `/__l5e/assets-v1/889364c8-ae64-40d5-bcaf-64a38ab5cf18/ga-traffic-truck.glb`,
      length: 19.8,
      yaw: Math.PI,
    },
  },
  Yt = {
    hatch: 9049108,
    sedan: 4872812,
    suv: 14211805,
    pickup: 15856110,
    bus: 15921904,
    truck: 1916794,
  };
function Xt(e, t) {
  let n = (e, t) => {
      let n = new j(e);
      return ((n.name = t), n);
    },
    r = {
      paint: n({ color: Yt[t], metalness: 0.55, roughness: 0.28 }, `paint`),
      roof: n({ color: 16053490, metalness: 0.3, roughness: 0.4 }, `roof`),
      glass: n({ color: 725270, metalness: 0.9, roughness: 0.06 }, `glass`),
      trim: n({ color: 1316120, metalness: 0.2, roughness: 0.62 }, `trim`),
      chrome: n({ color: 13225683, metalness: 1, roughness: 0.16 }, `chrome`),
      rubber: n({ color: 1052690, metalness: 0, roughness: 0.92 }, `tire`),
      head: n(
        {
          color: 16054015,
          emissive: 16777215,
          emissiveIntensity: 1.6,
          roughness: 0.2,
        },
        `light_front`,
      ),
      tail: n(
        {
          color: 5899011,
          emissive: 16715782,
          emissiveIntensity: 1.8,
          roughness: 0.25,
        },
        `light_rear`,
      ),
      amber: n(
        {
          color: 8012288,
          emissive: 16748544,
          emissiveIntensity: 1.2,
          roughness: 0.25,
        },
        `lamp_amber`,
      ),
    },
    i = (e, t) => {
      let n = e.toLowerCase();
      if (n.startsWith(`roof_paint`)) return r.roof;
      if (n.startsWith(`paint`)) return r.paint;
      if (n.includes(`glass`) || n.includes(`screen`) || n === `mirror`)
        return r.glass;
      if (n.startsWith(`light_front`)) return r.head;
      if (n.startsWith(`lamp_red`) || n.startsWith(`light_rear`) || n === `red`)
        return r.tail;
      if (n.startsWith(`lamp_amber`) || n === `beacon`) return r.amber;
      if (n === `tire` || n === `tyre`) return r.rubber;
      if (
        n.includes(`machined`) ||
        n === `chrome` ||
        n === `rim` ||
        n === `pole`
      )
        return r.chrome;
      if (n === `lamp`) return r.head;
      if (n.startsWith(`semi-truck_body`)) {
        let e = t;
        return ((e.map = null), (e.metalness = 0.5), (e.roughness = 0.3), e);
      }
      return r.trim;
    };
  e.traverse((e) => {
    let n = e;
    if (n.isMesh) {
      if (
        t === `truck` &&
        /trailer_mesh|door_rear/.test(e.name + (e.parent?.name ?? ``))
      ) {
        n.material = Zt(n.geometry);
        return;
      }
      n.material = Array.isArray(n.material)
        ? n.material.map((e) => i(e.name, e))
        : i(n.material.name, n.material);
    }
  });
}
var X = null;
function Zt(e) {
  e.computeBoundingBox();
  let t = e.boundingBox,
    n = e.getAttribute(`position`),
    r = new Float32Array(n.count * 2),
    a = e.getAttribute(`normal`),
    s = t.max.x - t.min.x || 1,
    c = t.max.y - t.min.y || 1,
    l = t.max.z - t.min.z || 1;
  for (let e = 0; e < n.count; e++) {
    let i = l > s ? (n.getZ(e) - t.min.z) / l : (n.getX(e) - t.min.x) / s;
    ((r[e * 2] = a && a.getX(e) < 0 ? 1 - i : i),
      (r[e * 2 + 1] = (n.getY(e) - t.min.y) / c));
  }
  if ((e.setAttribute(`uv`, new i(r, 2)), X)) return X;
  let u = document.createElement(`canvas`);
  ((u.width = 1024), (u.height = 256));
  let d = u.getContext(`2d`),
    f = d.createLinearGradient(0, 0, 0, 256);
  (f.addColorStop(0, `#e9ebec`),
    f.addColorStop(1, `#c9cdd0`),
    (d.fillStyle = f),
    d.fillRect(0, 0, 1024, 256));
  for (let e = 0; e < 1024; e += 16)
    ((d.fillStyle = `rgba(0,0,0,0.10)`),
      d.fillRect(e, 0, 3, 256),
      (d.fillStyle = `rgba(255,255,255,0.35)`),
      d.fillRect(e + 3, 0, 2, 256));
  ((d.fillStyle = `#5b6066`),
    d.fillRect(0, 0, 1024, 10),
    d.fillRect(0, 244, 1024, 12),
    (d.fillStyle = `#c8102e`),
    d.fillRect(0, 168, 1024, 22),
    (d.fillStyle = `#0a2a6b`),
    d.fillRect(0, 192, 1024, 12),
    (d.fillStyle = `#0a2a6b`),
    (d.font = `bold 74px Barlow, Arial, sans-serif`),
    (d.textBaseline = `middle`),
    d.fillText(`RODOLOG`, 90, 100),
    (d.fillStyle = `#c8102e`),
    (d.font = `600 30px Barlow, Arial, sans-serif`),
    d.fillText(`TRANSPORTES & LOGÍSTICA`, 96, 146),
    d.fillText(`TRANSPORTES & LOGÍSTICA`, 610, 146),
    (d.fillStyle = `#0a2a6b`),
    (d.font = `bold 74px Barlow, Arial, sans-serif`),
    d.fillText(`RODOLOG`, 604, 100));
  let p = new o(u);
  return (
    (p.colorSpace = M),
    (p.anisotropy = 4),
    (X = new j({ map: p, metalness: 0.45, roughness: 0.38 })),
    (X.name = `trailer_livery`),
    X
  );
}
var Qt = new Set([`hatch`, `sedan`, `suv`, `pickup`, `bus`, `truck`]),
  $t = new Map();
function en() {
  let e = new Pe();
  return (e.setMeshoptDecoder(Et), e);
}
async function tn(e, t) {
  let n = await fetch(e);
  if (!n.ok) throw Error(`HTTP ${n.status} for ${e}`);
  let r = Number(n.headers.get(`content-length`)) || 0,
    i = n.body?.getReader();
  if (!i) return n.arrayBuffer();
  let a = [],
    o = 0;
  for (;;) {
    let { done: e, value: n } = await i.read();
    if (e) break;
    n && (a.push(n), (o += n.length), r && t?.(Math.min(1, o / r)));
  }
  let s = new Uint8Array(o),
    c = 0;
  for (let e of a) (s.set(e, c), (c += e.length));
  return (t?.(1), s.buffer);
}
async function nn(e) {
  return (await en().parseAsync(e, ``)).scene;
}
function rn(e) {
  e.traverse((e) => {
    let t = e;
    if (t.isMesh)
      for (let e of Array.isArray(t.material) ? t.material : [t.material]) {
        let t = e;
        /Paint_Material$/.test(e.name)
          ? (t.color.setHex(460810),
            (t.metalness = 0.9),
            (t.roughness = 0.16),
            (t.needsUpdate = !0))
          : /2024Window_Material$/.test(e.name) && W(e);
      }
  });
}
function an(e) {
  let t = [];
  e.traverse((e) => {
    let n = e;
    n.isMesh &&
      !Array.isArray(n.material) &&
      n.material.name === `Material_774` &&
      t.push(e);
  });
  for (let e of t) e.removeFromParent();
  e.traverse((e) => {
    let t = e;
    if (t.isMesh)
      for (let e of Array.isArray(t.material) ? t.material : [t.material]) {
        let t = e;
        Ot(e) ||
          (e.name === `PaletteMaterial001`
            ? ((t.map = null),
              t.color.setHex(15658988),
              (t.metalness = 0.15),
              (t.roughness = 0.22),
              `clearcoat` in t && (t.clearcoat = 1),
              (t.needsUpdate = !0))
            : e.name === `Material_698` &&
              (t.color.setHex(1710878),
              (t.roughness = 0.35),
              (t.needsUpdate = !0)));
      }
  });
}
var on = new Set([
    `revuelto`,
    `huracan-evo`,
    `tourbillon`,
    `utopia-roadster`,
    `huayra`,
    `demon`,
    `chiron-ss300`,
    `laferrari`,
    `svj`,
    `m4-competition`,
    `m8-competition`,
    `jesko`,
    `voiture-noire`,
    `mustang-rtr`,
    `m2`,
  ]),
  sn = new Set([
    `svj`,
    `m4-competition`,
    `m8-competition`,
    `jesko`,
    `voiture-noire`,
    `m2`,
  ]),
  cn =
    /wheel|tire|tyre|rim|brakedis|brake\.|rotor|^ext_disc$|1004bodyunrefunblend1063/i,
  ln = (e) => {
    let t = e.material.name;
    return cn.test(t) && !/call?iper|steering/i.test(t);
  };
function Z(e, t, r) {
  e.updateMatrixWorld(!0);
  let o = [],
    s = new Map(),
    c = [],
    l = new n().setFromObject(e),
    u = (l.min.x + l.max.x) / 2,
    d = (l.min.z + l.max.z) / 2;
  e.traverse((e) => {
    if (!(e instanceof O) || Array.isArray(e.material)) return;
    let n = e.geometry.clone(),
      l = e.material;
    (l.normalMap || n.deleteAttribute(`tangent`),
      l.vertexColors || n.deleteAttribute(`color`),
      !l.aoMap && !l.lightMap && n.deleteAttribute(`uv1`),
      !l.map &&
        !l.normalMap &&
        !l.roughnessMap &&
        !l.metalnessMap &&
        !l.emissiveMap &&
        !l.alphaMap &&
        n.deleteAttribute(`uv`));
    for (let [e, t] of Object.entries(n.attributes)) {
      if (!(t instanceof i) && !(t instanceof _)) continue;
      let r = new Float32Array(t.count * t.itemSize);
      for (let e = 0; e < t.count; e++)
        for (let n = 0; n < t.itemSize; n++)
          r[e * t.itemSize + n] = t.getComponent(e, n);
      n.setAttribute(e, new i(r, t.itemSize));
    }
    if ((n.applyMatrix4(e.matrixWorld), r?.(e))) {
      o.push(new O(n, e.material));
      return;
    }
    if (t?.(e)) {
      let t = n.getAttribute(`position`),
        r = d,
        o = n.getIndex(),
        s = (o ? o.count : t.count) / 3,
        f = (e, t) => (o ? o.getX(e * 3 + t) : e * 3 + t),
        p = [[], [], [], []];
      for (let e = 0; e < s; e++) {
        let n = f(e, 0),
          i = f(e, 1),
          a = f(e, 2),
          o = (t.getX(n) + t.getX(i) + t.getX(a)) / 3,
          s = (t.getZ(n) + t.getZ(i) + t.getZ(a)) / 3;
        p[(o < u ? 0 : 1) + (s < r ? 0 : 2)].push(n, i, a);
      }
      for (let t of p) {
        if (!t.length) continue;
        let o = new a();
        for (let [e, r] of Object.entries(n.attributes)) {
          let n = r,
            a = new Float32Array(t.length * n.itemSize);
          for (let e = 0; e < t.length; e++)
            for (let r = 0; r < n.itemSize; r++)
              a[e * n.itemSize + r] = n.getComponent(t[e], r);
          o.setAttribute(e, new i(a, n.itemSize));
        }
        o.computeBoundingBox();
        let s = o.boundingBox,
          d = s.getCenter(new N());
        o.translate(-d.x, -d.y, -d.z);
        let f = new O(o, l);
        ((f.name = `${e.name}_${d.x < u ? `L` : `R`}${d.z < r ? `F` : `R`}`),
          f.position.copy(d),
          (f.castShadow = !0),
          (f.userData.wheel = !0),
          (f.userData.front = d.z < r),
          (f.userData.radius = Math.max(0.2, (s.max.y - s.min.y) / 2)),
          c.push(f));
      }
      n.dispose();
      return;
    }
    let f = n.toNonIndexed();
    n.dispose();
    let p = Object.keys(f.attributes).sort().join(`,`),
      m = e.material,
      h = JSON.stringify([
        m.type,
        m.color?.getHex(),
        m.emissive?.getHex(),
        m.emissiveIntensity,
        m.metalness,
        m.roughness,
        m.map?.uuid,
        m.normalMap?.uuid,
        m.roughnessMap?.uuid,
        m.metalnessMap?.uuid,
        m.alphaMap?.uuid,
        m.aoMap?.uuid,
        m.emissiveMap?.uuid,
        m.transparent,
        m.opacity,
        m.side,
        m.alphaTest,
        m.depthWrite,
        m.vertexColors,
        /^svj_/.test(m.name) ? m.name : ``,
        p,
      ]),
      g = s.get(h);
    (g || ((g = { material: e.material, geometries: [] }), s.set(h, g)),
      g.geometries.push(f));
  });
  let p = new f();
  for (let { material: e, geometries: t } of s.values()) {
    let n = ke(t);
    if (n) {
      let r = new O(n, e);
      ((r.name = e.name), (r.castShadow = !0), p.add(r));
      for (let e of t) e.dispose();
    } else
      for (let n of t) {
        let t = new O(n, e);
        ((t.name = e.name), (t.castShadow = !0), p.add(t));
      }
  }
  for (let e of c) p.add(e);
  return (o.length && p.add(un(o)), p.children.length ? p : e);
}
function un(e, t, r) {
  let i = new n();
  for (let t of e)
    (t.geometry.computeBoundingBox(), i.union(t.geometry.boundingBox));
  let a = r ?? i.getCenter(new N()),
    o = G(
      e
        .reduce((e, t) =>
          t.geometry.getAttribute(`position`).count >
          e.geometry.getAttribute(`position`).count
            ? t
            : e,
        )
        .geometry.getAttribute(`position`).array,
    ),
    s = t ?? new N(...Gt([o.x, o.y, o.z])),
    c = new f();
  ((c.name = `steering-wheel`), c.position.copy(a), (c.userData.axis = s));
  for (let t of e)
    (t.geometry.translate(-a.x, -a.y, -a.z),
      (t.name = `steering-part`),
      (t.castShadow = !1),
      c.add(t));
  return c;
}
function dn(e) {
  let t = [];
  e.traverse((e) => {
    /^Plane(_|$)/.test(e.name) && t.push(e);
  });
  for (let e of t) e.removeFromParent();
}
function Q(e, t) {
  let n = new a();
  for (let [r, a] of Object.entries(e.attributes)) {
    let e = a,
      o = e.itemSize,
      s = new Float32Array(t.length * 3 * o);
    (t.forEach((t, n) => {
      for (let r = 0; r < 3 * o; r++)
        s[n * 3 * o + r] = e.getComponent(t * 3 + Math.floor(r / o), r % o);
    }),
      n.setAttribute(r, new i(s, o)));
  }
  return n;
}
var $ = {
  center: [-0.4, 0.75, -0.38],
  axis: [0, 0.24, 0.97],
  radius: 0.205,
  back: -0.13,
  front: 0.06,
};
function fn(e) {
  let t = new N(...$.center),
    n = new N(...$.axis).normalize(),
    r = new N(),
    i = (e, i, a) => {
      r.set(e, i, a).sub(t);
      let o = r.dot(n);
      return o < $.back || o > $.front
        ? !1
        : r.addScaledVector(n, -o).length() < $.radius;
    },
    a = [];
  for (let t of [...e.children]) {
    let e = t;
    if (
      !e.isMesh ||
      e.userData.wheel ||
      Array.isArray(e.material) ||
      e.geometry.index ||
      !/Interior|Carbon|Coloured|ORANGE_INT|Badge|Base_Material/.test(
        e.material.name,
      ) ||
      e.position.lengthSq() > 0
    )
      continue;
    let n = e.geometry.getAttribute(`position`),
      r = [],
      o = [];
    for (let e = 0; e < n.count / 3; e++) {
      let t = !0;
      for (let r = 0; r < 3 && t; r++) {
        let a = e * 3 + r;
        t = i(n.getX(a), n.getY(a), n.getZ(a));
      }
      (t ? r : o).push(e);
    }
    if (!r.length) continue;
    let s = e.geometry;
    (a.push(new O(Q(s, r), e.material)), (e.geometry = Q(s, o)), s.dispose());
  }
  a.length && e.add(un(a, n, t));
}
function pn(e, t) {
  let n = K[t];
  if (!n || e.getObjectByName(`steering-wheel`)) return;
  let r = [];
  for (let t of e.children) {
    let e = t;
    !e.isMesh ||
      e.userData.wheel ||
      Array.isArray(e.material) ||
      e.geometry.index ||
      e.position.lengthSq() > 0 ||
      e.material.opacity < 0.9 ||
      r.push(e);
  }
  let i = Kt(
    r.map((e) => e.geometry.getAttribute(`position`).array),
    n.eye,
  );
  if (!i) return;
  let a = [];
  for (let [e, t] of i.tris) {
    let n = r[e],
      i = n.geometry,
      o = new Set(t),
      s = i.getAttribute(`position`).count / 3,
      c = [];
    for (let e = 0; e < s; e++) o.has(e) || c.push(e);
    (a.push(new O(Q(i, t), n.material)), (n.geometry = Q(i, c)), i.dispose());
  }
  e.add(un(a, new N(...i.axis), new N(...i.center)));
}
var mn = (e) => e.material.name.startsWith(`Wing_`),
  hn = (e) => {
    for (let t = e; t; t = t.parent) if (/spoiler/i.test(t.name)) return !0;
    return !1;
  };
function gn(e, t = mn, r) {
  e.updateMatrixWorld(!0);
  let i = [];
  e.traverse((e) => {
    e instanceof O && !Array.isArray(e.material) && t(e) && i.push(e);
  });
  let a = new f();
  for (let e of i) {
    let t = e.material,
      n = new O(e.geometry, t);
    ((n.name = t.name),
      e.matrixWorld.decompose(n.position, n.quaternion, n.scale),
      a.add(n),
      e.removeFromParent());
  }
  let o = Z(e, r);
  if (!i.length) return o;
  let s = Z(a),
    c = new n().setFromObject(s),
    l = new N(0, c.min.y, c.min.z),
    u = new f();
  ((u.name = `active-wing`), u.position.copy(l));
  for (let e of [...s.children]) {
    let t = e;
    (t.geometry.translate(-l.x, -l.y, -l.z),
      (t.userData.strut = /exhaust/i.test(t.material.name)),
      u.add(t));
  }
  return (o.add(u), o);
}
var _n = { color: 1316120, metalness: 0.9, roughness: 0.3 };
function vn(e) {
  e.traverse((e) => {
    let t = e;
    if (t.isMesh)
      for (let e of Array.isArray(t.material) ? t.material : [t.material]) {
        if (e?.name !== `ChironMI_Rim1`) continue;
        let t = e;
        (t.color.setHex(_n.color),
          (t.metalness = _n.metalness),
          (t.roughness = _n.roughness),
          (t.needsUpdate = !0));
      }
  });
}
var yn = /Cabin_Leather|Cabin_Suede|Dashboard/i,
  bn =
    /Cabin|Dashboard|Glass|Light|Logo|Grid|Mirror|caliper|Brake|Engine|red_glass/i;
function xn(e, t = !1) {
  let n = new Map();
  e.traverse((e) => {
    let r = e;
    if (!r.isMesh || Array.isArray(r.material)) return;
    let i = r.material.name || r.name;
    if (
      (yn.test(i) && ((r.visible = !1), (r.userData.cabinOnly = !0)),
      bn.test(i) && (r.castShadow = !1),
      !t)
    )
      return;
    r.castShadow = !1;
    let a = r.material;
    if (a instanceof A) {
      let e = n.get(a);
      if (!e) {
        let t = new j();
        (j.prototype.copy.call(t, a),
          (t.roughness = Math.max(
            0.12,
            a.roughness * (1 - 0.35 * a.clearcoat),
          )),
          (t.name = a.name),
          (t.forceSinglePass = !0),
          n.set(a, (e = t)));
      }
      r.material = e;
    }
  });
}
function Sn(e) {
  let t = $t.get(e);
  if (!t) {
    let n = Jt[e];
    ((t = tn(n.url)
      .then(nn)
      .then((t) => {
        if (
          (e === `revuelto` && rn(t),
          e === `chiron` && vn(t),
          e === `chiron-ss300` && kt(t),
          (e === `mustang-rtr` || e === `m2`) && jt(t),
          Qt.has(e) && Xt(t, e),
          e === `bmw` && an(t),
          e === `mustang` &&
            t.traverse((e) => {
              let t = e;
              if (!t.isMesh) return;
              let n = Array.isArray(t.material) ? t.material : [t.material];
              for (let e of n)
                if (e && e.name === `Body`) {
                  let t = e;
                  ((t.metalness = 0.82),
                    (t.roughness = 0.18),
                    (t.needsUpdate = !0));
                }
            }),
          t.traverse((e) => {
            let t = e;
            if (t.isMesh) {
              let e = Array.isArray(t.material) ? t.material : [t.material];
              for (let t of e)
                (t instanceof A &&
                  t.transmission > 0 &&
                  ((t.transmission = 0),
                  (t.transparent = !0),
                  (t.opacity = 0.48),
                  (t.depthWrite = !1)),
                  (t.forceSinglePass = !0));
              ((t.castShadow = !0),
                (t.receiveShadow = !1),
                (t.frustumCulled = !0));
            }
          }),
          e === `bugatti`)
        )
          return gn(H(t, n));
        if (e === `chiron`) {
          let r = gn(H(t, n), hn, (e) => /tyre|rim/i.test(e.material.name));
          return (pn(r, e), r);
        }
        e === `chiron-ss300` && dn(t);
        let r = H(t, n);
        e === `svj` && It(r);
        let i = Z(r, on.has(e) ? ln : void 0, (t) =>
          Vt(e, `${t.name}|${t.parent?.name ?? ``}`, t.material.name || ``),
        );
        return (
          e === `revuelto` && (fn(i), Dt(i)),
          pn(i, e),
          sn.has(e) && Rt(i, { straighten: e === `svj` }),
          i
        );
      })),
      t.catch(() => $t.delete(e)),
      $t.set(e, t));
  }
  return t;
}
export {
  tn as fetchGlb,
  ke as i,
  Sn as loadCar,
  zt as n,
  nn as parseGlb,
  Ut as r,
  K as t,
  xn as trimChironForTrack,
};
