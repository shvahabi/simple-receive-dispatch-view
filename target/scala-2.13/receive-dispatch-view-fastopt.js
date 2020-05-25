let populateReceivingFormOnLoad,populateDispatchingTable,removeRowFromItemsList,submitDispatchingForm,updateReceivingForm,fetchReceivingForm,fetchDispatchingForm,updateDispatchingForm,fetchPeople,addNewRowToItemsList,propagatePersonArticleSelection,deleteReceivingForm,submitReceivingForm,populateDispatchingFormOnLoad,updateSummary;
(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.0.1",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((instance << 16) >> 16) === instance)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(instance) {
  switch ((typeof instance)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return "java.lang.Byte"
        } else if ((((instance << 16) >> 16) === instance)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((instance instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return instance.getClass__jl_Class()
}
function $dp_clone__O(instance) {
  return instance.clone__O()
}
function $dp_notify__V(instance) {
  return instance.notify__V()
}
function $dp_notifyAll__V(instance) {
  return instance.notifyAll__V()
}
function $dp_finalize__V(instance) {
  return instance.finalize__V()
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(x0)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, x0)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, x0)
  } else {
    return $c_O.prototype.equals__O__Z.call(instance, x0)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  return instance.compareTo__O__I(x0)
}
function $dp_length__I(instance) {
  return instance.length__I()
}
function $dp_charAt__I__C(instance, x0) {
  return instance.charAt__I__C(x0)
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, x0, x1)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(x0, x1)
  }
}
function $dp_byteValue__B(instance) {
  return instance.byteValue__B()
}
function $dp_shortValue__S(instance) {
  return instance.shortValue__S()
}
function $dp_intValue__I(instance) {
  return instance.intValue__I()
}
function $dp_longValue__J(instance) {
  return instance.longValue__J()
}
function $dp_floatValue__F(instance) {
  return instance.floatValue__F()
}
function $dp_doubleValue__D(instance) {
  return instance.doubleValue__D()
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectClassName(this);
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
const $s_Ldummy__main__AT__V = (function(args) {
  /*<skip>*/
});
const $p_Ldummy$__inquireNumberOfRows$1__I = (function($thiz) {
  return $uI($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist").childElementCount)
});
const $p_Ldummy$__inquireNumberOfRows$2__I = (function($thiz) {
  return $uI($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist").childElementCount)
});
const $p_Ldummy$__person$1__Lorg_scalajs_dom_raw_Element__Ldummy$Person = (function($thiz, attributer) {
  return new $c_Ldummy$Person($as_T(attributer.getAttribute("firstName")), $as_T(attributer.getAttribute("surName")), $as_T(attributer.getAttribute("nationalIDNo")))
});
class $c_Ldummy$ extends $c_O {
  populateReceivingFormOnLoad__I__V(a) {
    const url = ("http://localhost:8080/receivedispatch/receipts/" + a);
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", url, null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const jsonEncodedForm = JSON.parse($as_T(value.responseText));
        const receivingForm = $m_Ldummy$().receivingFormFromJson__sjs_js_Dynamic__Ldummy$ReceivingForm(jsonEncodedForm);
        $m_Ldummy$().populateReceivingForm__Ldummy$ReceivingForm__V(receivingForm)
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  populateDispatchingTable__Ldummy$DispatchingForm__V(fetchedForm) {
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("formno");
    const this$1 = fetchedForm.Ldummy$DispatchingForm__f_number;
    $$x1.innerText = this.translateToPersian__T__T(("" + this$1));
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("dispatcheddate").innerText = this.translateToPersian__T__T(fetchedForm.Ldummy$DispatchingForm__f_date.concat__T());
    const $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goods_owner");
    const this$3 = fetchedForm.Ldummy$DispatchingForm__f_goodsOwner;
    $$x2.innerText = $m_sr_ScalaRunTime$()._toString__s_Product__T(this$3);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftdate").innerText = this.translateToPersian__T__T(fetchedForm.Ldummy$DispatchingForm__f_draftDate.concat__T());
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftno").innerText = fetchedForm.Ldummy$DispatchingForm__f_draftNumber;
    const $$x3 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftowner");
    const this$4 = fetchedForm.Ldummy$DispatchingForm__f_draftOwner;
    $$x3.innerText = $m_sr_ScalaRunTime$()._toString__s_Product__T(this$4);
    const $$x4 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("partno");
    const this$5 = fetchedForm.Ldummy$DispatchingForm__f_partNumber;
    $$x4.innerText = ("" + this$5);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno").innerText = this.translateToPersian__T__T(fetchedForm.Ldummy$DispatchingForm__f_truck.concat__T());
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("comments").innerText = fetchedForm.Ldummy$DispatchingForm__f_comments;
    const $$x5 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("assignee");
    const this$7 = fetchedForm.Ldummy$DispatchingForm__f_assignee;
    $$x5.innerText = $m_sr_ScalaRunTime$()._toString__s_Product__T(this$7);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_grossweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_packageweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_netweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_quantity_sum").innerText = "0"
  };
  populateReceivingTable__Ldummy$ReceivingForm__V(fetchedForm) {
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("formno");
    const this$1 = fetchedForm.Ldummy$ReceivingForm__f_number;
    $$x1.innerText = this.translateToPersian__T__T(("" + this$1));
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("receiveddate").innerText = this.translateToPersian__T__T(fetchedForm.Ldummy$ReceivingForm__f_date.concat__T());
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goods_owner").innerText = ((fetchedForm.Ldummy$ReceivingForm__f_goodsOwner.Ldummy$Person__f_firstName + " ") + fetchedForm.Ldummy$ReceivingForm__f_goodsOwner.Ldummy$Person__f_surName);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("billofladingno").innerText = fetchedForm.Ldummy$ReceivingForm__f_billOfLading;
    const $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("partno");
    const this$3 = fetchedForm.Ldummy$ReceivingForm__f_partNumber;
    $$x2.innerText = this.translateToPersian__T__T(("" + this$3));
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("origin").innerText = fetchedForm.Ldummy$ReceivingForm__f_origin;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno").innerText = fetchedForm.Ldummy$ReceivingForm__f_truck.concat__T();
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("comments").innerText = fetchedForm.Ldummy$ReceivingForm__f_comments;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("representative").innerText = ((fetchedForm.Ldummy$ReceivingForm__f_representative.Ldummy$Person__f_firstName + " ") + fetchedForm.Ldummy$ReceivingForm__f_representative.Ldummy$Person__f_surName);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_grossweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_packageweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_netweight_sum").innerText = "0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_quantity_sum").innerText = "0";
    const this$10 = fetchedForm.Ldummy$ReceivingForm__f_itemsList.Ldummy$ItemsList__f_items;
    let itemsArray;
    if ((this$10.knownSize__I() >= 0)) {
      const len = this$10.knownSize__I();
      const destination = $newArrayObject($d_Ldummy$Item.getArrayOf(), [len]);
      $f_sc_IterableOnceOps__copyToArray__O__I__I(this$10, destination, 0);
      itemsArray = destination
    } else {
      let capacity = 0;
      let size = 0;
      let jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      const it = this$10.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        const unboxedElem = ((elem === null) ? null : elem);
        jsElems.push(unboxedElem)
      };
      itemsArray = $makeNativeArrayWrapper($d_Ldummy$Item.getArrayOf(), jsElems)
    };
    const this$13 = $m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(itemsArray);
    const this$15 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$13);
    const f = ((this$14) => ((x$1$2) => {
      const x$1 = $as_Ldummy$Item(x$1$2);
      return x$1.Ldummy$Item__f_unitOfMeasurement
    }))(this);
    let this$18;
    if ((this$15 === $m_sci_Nil$())) {
      this$18 = $m_sci_Nil$()
    } else {
      const arg1 = this$15.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$15.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      this$18 = h
    };
    const this$16 = $m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(itemsArray);
    const this$17 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$16);
    const f$1 = ((this$2$1, itemsArray$1) => ((x$2) => {
      $as_Ldummy$Item(x$2);
      return itemsArray$1.get(0).Ldummy$Item__f_unitOfMeasurement
    }))(this, itemsArray);
    let that;
    if ((this$17 === $m_sci_Nil$())) {
      that = $m_sci_Nil$()
    } else {
      const arg1$2 = this$17.head__O();
      const h$1 = new $c_sci_$colon$colon(f$1(arg1$2), $m_sci_Nil$());
      let t$1 = h$1;
      let rest$1 = $as_sci_List(this$17.tail__O());
      while ((rest$1 !== $m_sci_Nil$())) {
        const arg1$3 = rest$1.head__O();
        const nx$1 = new $c_sci_$colon$colon(f$1(arg1$3), $m_sci_Nil$());
        t$1.sci_$colon$colon__f_next = nx$1;
        t$1 = nx$1;
        rest$1 = $as_sci_List(rest$1.tail__O())
      };
      that = h$1
    };
    const this$19 = $as_sci_List($f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this$18, that));
    const f$2 = ((this$3$1) => ((x$3$2) => {
      const x$3 = $as_T2(x$3$2);
      const x$4 = x$3.T2__f__1;
      const y = x$3.T2__f__2;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x$4, y)
    }))(this);
    let this$20;
    if ((this$19 === $m_sci_Nil$())) {
      this$20 = $m_sci_Nil$()
    } else {
      const arg1$4 = this$19.head__O();
      const h$2 = new $c_sci_$colon$colon(f$2(arg1$4), $m_sci_Nil$());
      let t$2 = h$2;
      let rest$2 = $as_sci_List(this$19.tail__O());
      while ((rest$2 !== $m_sci_Nil$())) {
        const arg1$5 = rest$2.head__O();
        const nx$2 = new $c_sci_$colon$colon(f$2(arg1$5), $m_sci_Nil$());
        t$2.sci_$colon$colon__f_next = nx$2;
        t$2 = nx$2;
        rest$2 = $as_sci_List(rest$2.tail__O())
      };
      this$20 = h$2
    };
    const it$1 = this$20.iterator__sc_Iterator();
    if ((!it$1.hasNext__Z())) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.reduceLeft")
    };
    let first = true;
    let acc = 0;
    while (it$1.hasNext__Z()) {
      const x$5 = it$1.next__O();
      if (first) {
        acc = x$5;
        first = false
      } else {
        const arg1$6 = acc;
        const x$2$2 = $uZ(arg1$6);
        const x$3$3 = $uZ(x$5);
        acc = (x$2$2 && x$3$3)
      }
    };
    const consistentUnitOfMeasurement = $uZ(acc);
    const end = ((1 + itemsArray.u.length) | 0);
    const isEmpty = (end <= 1);
    const scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
    if ((!isEmpty)) {
      let i = 1;
      while (true) {
        const v1 = i;
        const anyItem = itemsArray.get((((-1) + v1) | 0));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_description_" + v1)).innerText = anyItem.Ldummy$Item__f_description;
        const $$x4 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_quantity_" + v1));
        const $$x3 = $m_Ldummy$();
        const this$30 = anyItem.Ldummy$Item__f_quantity;
        $$x4.innerText = $$x3.translateToPersian__T__T(("" + this$30));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + v1)).innerText = anyItem.Ldummy$Item__f_unitOfMeasurement;
        const $$x6 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_grossweight_" + v1));
        const $$x5 = $m_Ldummy$();
        const this$32 = anyItem.Ldummy$Item__f_grossWeight;
        $$x6.innerText = $$x5.translateToPersian__T__T(("" + this$32));
        const $$x8 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_packageweight_" + v1));
        const $$x7 = $m_Ldummy$();
        const this$34 = anyItem.Ldummy$Item__f_packageWeight;
        $$x8.innerText = $$x7.translateToPersian__T__T(("" + this$34));
        const $$x10 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_netweight_" + v1));
        const $$x9 = $m_Ldummy$();
        const this$36 = anyItem.Ldummy$Item__f_netWeight;
        $$x10.innerText = $$x9.translateToPersian__T__T(("" + this$36));
        if (consistentUnitOfMeasurement) {
          const $$x12 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_quantity_sum");
          const $$x11 = $m_Ldummy$();
          const x$6 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_quantity_sum").innerText));
          const this$40 = ($m_jl_Double$().parseDouble__T__D(x$6) + anyItem.Ldummy$Item__f_quantity);
          $$x12.innerText = $$x11.translateToPersian__T__T(("" + this$40))
        };
        const x$7 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_grossweight_sum").innerText));
        const sg = $m_jl_Double$().parseDouble__T__D(x$7);
        const x$8 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_packageweight_sum").innerText));
        const sp = $m_jl_Double$().parseDouble__T__D(x$8);
        const x$9 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_netweight_sum").innerText));
        const sn = $m_jl_Double$().parseDouble__T__D(x$9);
        const $$x14 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_grossweight_sum");
        const $$x13 = $m_Ldummy$();
        const this$48 = (sg + anyItem.Ldummy$Item__f_grossWeight);
        $$x14.innerText = $$x13.translateToPersian__T__T(("" + this$48));
        const $$x16 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_packageweight_sum");
        const $$x15 = $m_Ldummy$();
        const this$50 = (sp + anyItem.Ldummy$Item__f_packageWeight);
        $$x16.innerText = $$x15.translateToPersian__T__T(("" + this$50));
        const $$x18 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_netweight_sum");
        const $$x17 = $m_Ldummy$();
        const this$52 = (sn + anyItem.Ldummy$Item__f_netWeight);
        $$x18.innerText = $$x17.translateToPersian__T__T(("" + this$52));
        if ((i === scala$collection$immutable$Range$$lastElement)) {
          break
        };
        i = ((1 + i) | 0)
      }
    };
    if (consistentUnitOfMeasurement) {
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_unitofmeasurement_sum").innerText = itemsArray.get(0).Ldummy$Item__f_unitOfMeasurement
    };
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("deletebutton").removeAttribute("disabled");
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("editbutton").removeAttribute("disabled");
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("printbutton").removeAttribute("disabled")
  };
  populateDispatchingForm__Ldummy$DispatchingForm__V(dispatchingForm) {
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("formno");
    const this$1 = dispatchingForm.Ldummy$DispatchingForm__f_number;
    $$x1.value = ("" + this$1);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("dispatcheddate").value = ((((dispatchingForm.Ldummy$DispatchingForm__f_date.Ldummy$Date__f_year + "/") + dispatchingForm.Ldummy$DispatchingForm__f_date.Ldummy$Date__f_month) + "/") + dispatchingForm.Ldummy$DispatchingForm__f_date.Ldummy$Date__f_day);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_firstname").value = dispatchingForm.Ldummy$DispatchingForm__f_goodsOwner.Ldummy$Person__f_firstName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_lastname").value = dispatchingForm.Ldummy$DispatchingForm__f_goodsOwner.Ldummy$Person__f_surName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_nationalidno").value = dispatchingForm.Ldummy$DispatchingForm__f_goodsOwner.Ldummy$Person__f_nationalIDNo;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftno").value = dispatchingForm.Ldummy$DispatchingForm__f_draftNumber;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftowner_firstname").value = dispatchingForm.Ldummy$DispatchingForm__f_draftOwner.Ldummy$Person__f_firstName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftowner_lastname").value = dispatchingForm.Ldummy$DispatchingForm__f_draftOwner.Ldummy$Person__f_surName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftowner_nationalidno").value = dispatchingForm.Ldummy$DispatchingForm__f_draftOwner.Ldummy$Person__f_nationalIDNo;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("draftdate").value = ((((dispatchingForm.Ldummy$DispatchingForm__f_draftDate.Ldummy$Date__f_year + "/") + dispatchingForm.Ldummy$DispatchingForm__f_draftDate.Ldummy$Date__f_month) + "/") + dispatchingForm.Ldummy$DispatchingForm__f_draftDate.Ldummy$Date__f_day);
    const $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("partno");
    const this$3 = dispatchingForm.Ldummy$DispatchingForm__f_partNumber;
    $$x2.value = ("" + this$3);
    const $$x3 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_state");
    const this$5 = dispatchingForm.Ldummy$DispatchingForm__f_truck.Ldummy$CarPlate__f_state;
    $$x3.value = ("" + this$5);
    const $$x4 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_random");
    const this$7 = dispatchingForm.Ldummy$DispatchingForm__f_truck.Ldummy$CarPlate__f_random;
    $$x4.value = ("" + this$7);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_area").value = dispatchingForm.Ldummy$DispatchingForm__f_truck.Ldummy$CarPlate__f_area;
    const $$x5 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_serial");
    const this$9 = dispatchingForm.Ldummy$DispatchingForm__f_truck.Ldummy$CarPlate__f_serial;
    $$x5.value = ("" + this$9);
    const this$11 = dispatchingForm.Ldummy$DispatchingForm__f_itemsList.Ldummy$ItemsList__f_items;
    let these = this$11;
    while ((!these.isEmpty__Z())) {
      const arg1 = these.head__O();
      const anyItem = $as_Ldummy$Item(arg1);
      $m_Ldummy$().addNewRowToItemsList__Lorg_scalajs_dom_raw_Node();
      const $$x6 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rownumber_" + $p_Ldummy$__inquireNumberOfRows$1__I(this)));
      const this$12 = $p_Ldummy$__inquireNumberOfRows$1__I(this);
      $$x6.innerHTML = ("" + this$12);
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_description_" + $p_Ldummy$__inquireNumberOfRows$1__I(this))).value = anyItem.Ldummy$Item__f_description;
      const $$x7 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_quantity_" + $p_Ldummy$__inquireNumberOfRows$1__I(this)));
      const this$14 = anyItem.Ldummy$Item__f_quantity;
      $$x7.value = ("" + this$14);
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + $p_Ldummy$__inquireNumberOfRows$1__I(this))).value = anyItem.Ldummy$Item__f_unitOfMeasurement;
      const $$x8 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_grossweight_" + $p_Ldummy$__inquireNumberOfRows$1__I(this)));
      const this$16 = anyItem.Ldummy$Item__f_grossWeight;
      $$x8.value = ("" + this$16);
      const $$x9 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_packageweight_" + $p_Ldummy$__inquireNumberOfRows$1__I(this)));
      const this$18 = anyItem.Ldummy$Item__f_packageWeight;
      $$x9.value = ("" + this$18);
      const $$x10 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_netweight_" + $p_Ldummy$__inquireNumberOfRows$1__I(this)));
      const this$20 = anyItem.Ldummy$Item__f_netWeight;
      $$x10.value = ("" + this$20);
      these = $as_sci_List(these.tail__O())
    };
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("comments").value = dispatchingForm.Ldummy$DispatchingForm__f_comments;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("assignee_firstname").value = dispatchingForm.Ldummy$DispatchingForm__f_assignee.Ldummy$Person__f_firstName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("assignee_lastname").value = dispatchingForm.Ldummy$DispatchingForm__f_assignee.Ldummy$Person__f_surName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("assignee_nationalidno").value = dispatchingForm.Ldummy$DispatchingForm__f_assignee.Ldummy$Person__f_nationalIDNo
  };
  populateReceivingForm__Ldummy$ReceivingForm__V(receivingForm) {
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("formno");
    const this$1 = receivingForm.Ldummy$ReceivingForm__f_number;
    $$x1.value = ("" + this$1);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("receiveddate").value = this.translateToPersian__T__T(receivingForm.Ldummy$ReceivingForm__f_date.concat__T());
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_firstname").value = receivingForm.Ldummy$ReceivingForm__f_goodsOwner.Ldummy$Person__f_firstName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_lastname").value = receivingForm.Ldummy$ReceivingForm__f_goodsOwner.Ldummy$Person__f_surName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("goodsowner_nationalidno").value = this.translateToPersian__T__T(receivingForm.Ldummy$ReceivingForm__f_goodsOwner.Ldummy$Person__f_nationalIDNo);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("billofladingno").value = receivingForm.Ldummy$ReceivingForm__f_billOfLading;
    const $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("partno");
    const this$3 = receivingForm.Ldummy$ReceivingForm__f_partNumber;
    $$x2.value = ("" + this$3);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("origin").value = receivingForm.Ldummy$ReceivingForm__f_origin;
    const $$x3 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_state");
    const this$5 = receivingForm.Ldummy$ReceivingForm__f_truck.Ldummy$CarPlate__f_state;
    $$x3.value = ("" + this$5);
    const $$x4 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_random");
    const this$7 = receivingForm.Ldummy$ReceivingForm__f_truck.Ldummy$CarPlate__f_random;
    $$x4.value = ("" + this$7);
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_area").value = receivingForm.Ldummy$ReceivingForm__f_truck.Ldummy$CarPlate__f_area;
    const $$x5 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("truckno_serial");
    const this$9 = receivingForm.Ldummy$ReceivingForm__f_truck.Ldummy$CarPlate__f_serial;
    $$x5.value = ("" + this$9);
    const this$11 = receivingForm.Ldummy$ReceivingForm__f_itemsList.Ldummy$ItemsList__f_items;
    let these = this$11;
    while ((!these.isEmpty__Z())) {
      const arg1 = these.head__O();
      const anyItem = $as_Ldummy$Item(arg1);
      $m_Ldummy$().addNewRowToItemsList__Lorg_scalajs_dom_raw_Node();
      const $$x7 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rownumber_" + $p_Ldummy$__inquireNumberOfRows$2__I(this)));
      const $$x6 = $m_Ldummy$();
      const this$12 = $p_Ldummy$__inquireNumberOfRows$2__I(this);
      $$x7.innerHTML = $$x6.translateToPersian__T__T(("" + this$12));
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_description_" + $p_Ldummy$__inquireNumberOfRows$2__I(this))).value = anyItem.Ldummy$Item__f_description;
      const $$x9 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_quantity_" + $p_Ldummy$__inquireNumberOfRows$2__I(this)));
      const $$x8 = $m_Ldummy$();
      const this$14 = anyItem.Ldummy$Item__f_quantity;
      $$x9.value = $$x8.translateToPersian__T__T(("" + this$14));
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + $p_Ldummy$__inquireNumberOfRows$2__I(this))).value = anyItem.Ldummy$Item__f_unitOfMeasurement;
      const $$x11 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_grossweight_" + $p_Ldummy$__inquireNumberOfRows$2__I(this)));
      const $$x10 = $m_Ldummy$();
      const this$16 = anyItem.Ldummy$Item__f_grossWeight;
      $$x11.value = $$x10.translateToPersian__T__T(("" + this$16));
      const $$x13 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_packageweight_" + $p_Ldummy$__inquireNumberOfRows$2__I(this)));
      const $$x12 = $m_Ldummy$();
      const this$18 = anyItem.Ldummy$Item__f_packageWeight;
      $$x13.value = $$x12.translateToPersian__T__T(("" + this$18));
      const $$x15 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_netweight_" + $p_Ldummy$__inquireNumberOfRows$2__I(this)));
      const $$x14 = $m_Ldummy$();
      const this$20 = anyItem.Ldummy$Item__f_netWeight;
      $$x15.value = $$x14.translateToPersian__T__T(("" + this$20));
      these = $as_sci_List(these.tail__O())
    };
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("comments").value = receivingForm.Ldummy$ReceivingForm__f_comments;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("representative_firstname").value = receivingForm.Ldummy$ReceivingForm__f_representative.Ldummy$Person__f_firstName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("representative_lastname").value = receivingForm.Ldummy$ReceivingForm__f_representative.Ldummy$Person__f_surName;
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("representative_nationalidno").value = this.translateToPersian__T__T(receivingForm.Ldummy$ReceivingForm__f_representative.Ldummy$Person__f_nationalIDNo)
  };
  dispatchingFormFromJson__sjs_js_Dynamic__Ldummy$DispatchingForm(jsonEncodedForm) {
    const formNo = $uI(jsonEncodedForm.FormNo);
    const partNo = $uI(jsonEncodedForm.PartNo);
    const this$1 = $uI(jsonEncodedForm.DispatchedDate.Year);
    const this$3 = $uI(jsonEncodedForm.DispatchedDate.Month);
    const this$5 = $uI(jsonEncodedForm.DispatchedDate.Day);
    const DispatchedDate = new $c_Ldummy$Date(("" + this$1), ("" + this$3), ("" + this$5));
    const truckNumber = new $c_Ldummy$CarPlate($uI(jsonEncodedForm.TruckNo.State), $uI(jsonEncodedForm.TruckNo.Serial), $as_T(jsonEncodedForm.TruckNo.Area), $uI(jsonEncodedForm.TruckNo.Random));
    const comments = $as_T(jsonEncodedForm.Comments);
    const assignee = new $c_Ldummy$Person($dp_toString__T(jsonEncodedForm.Assignee.FirstName), $dp_toString__T(jsonEncodedForm.Assignee.SurName), $dp_toString__T(jsonEncodedForm.Assignee.NationalIDNo));
    const owner = new $c_Ldummy$Person($dp_toString__T(jsonEncodedForm.GoodsOwner.FirstName), $dp_toString__T(jsonEncodedForm.GoodsOwner.SurName), $dp_toString__T(jsonEncodedForm.GoodsOwner.NationalIDNo));
    const this$7 = $uI(jsonEncodedForm.DraftDate.Year);
    const this$9 = $uI(jsonEncodedForm.DraftDate.Month);
    const this$11 = $uI(jsonEncodedForm.DraftDate.Day);
    const draftDate = new $c_Ldummy$Date(("" + this$7), ("" + this$9), ("" + this$11));
    const draftOwner = new $c_Ldummy$Person($dp_toString__T(jsonEncodedForm.DraftOwner.FirstName), $dp_toString__T(jsonEncodedForm.DraftOwner.SurName), $dp_toString__T(jsonEncodedForm.DraftOwner.NationalIDNo));
    const draftNumber = $as_T(jsonEncodedForm.DraftNo);
    const array = jsonEncodedForm.ItemsList;
    const this$14 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const this$16 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$14);
    const f = ((this$15) => ((x$2) => new $c_Ldummy$Item($as_T(x$2.Description), $uI(x$2.Quantity), $as_T(x$2.UnitOfMeasurement), $uD(x$2.GrossWeight), $uD(x$2.PackageWeight), $uD(x$2.NetWeight))))(this);
    let listOfItems;
    if ((this$16 === $m_sci_Nil$())) {
      listOfItems = $m_sci_Nil$()
    } else {
      const arg1 = this$16.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$16.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      listOfItems = h
    };
    const itemsList = new $c_Ldummy$ItemsList(listOfItems);
    return new $c_Ldummy$DispatchingForm(owner, formNo, DispatchedDate, partNo, truckNumber, draftDate, draftNumber, draftOwner, itemsList, comments, assignee, "{}")
  };
  receivingFormFromJson__sjs_js_Dynamic__Ldummy$ReceivingForm(jsonEncodedForm) {
    const formNo = $uI(jsonEncodedForm.FormNo);
    const origin = $as_T(jsonEncodedForm.Origin);
    const billOfLading = $as_T(jsonEncodedForm.BillOfLadingNo);
    const partNo = $uI(jsonEncodedForm.PartNo);
    const this$1 = $uI(jsonEncodedForm.ReceivedDate.Year);
    const this$3 = $uI(jsonEncodedForm.ReceivedDate.Month);
    const this$5 = $uI(jsonEncodedForm.ReceivedDate.Day);
    const ReceivedDate = new $c_Ldummy$Date(("" + this$1), ("" + this$3), ("" + this$5));
    const truckNumber = new $c_Ldummy$CarPlate($uI(jsonEncodedForm.TruckNo.State), $uI(jsonEncodedForm.TruckNo.Serial), $as_T(jsonEncodedForm.TruckNo.Area), $uI(jsonEncodedForm.TruckNo.Random));
    const comments = $as_T(jsonEncodedForm.Comments);
    const representative = new $c_Ldummy$Person($dp_toString__T(jsonEncodedForm.Representative.FirstName), $dp_toString__T(jsonEncodedForm.Representative.SurName), $dp_toString__T(jsonEncodedForm.Representative.NationalIDNo));
    const owner = new $c_Ldummy$Person($dp_toString__T(jsonEncodedForm.GoodsOwner.FirstName), $dp_toString__T(jsonEncodedForm.GoodsOwner.SurName), $dp_toString__T(jsonEncodedForm.GoodsOwner.NationalIDNo));
    const array = jsonEncodedForm.ItemsList;
    const this$8 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const this$10 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$8);
    const f = ((this$9) => ((x$2) => new $c_Ldummy$Item($as_T(x$2.Description), $uI(x$2.Quantity), $as_T(x$2.UnitOfMeasurement), $uD(x$2.GrossWeight), $uD(x$2.PackageWeight), $uD(x$2.NetWeight))))(this);
    let listOfItems;
    if ((this$10 === $m_sci_Nil$())) {
      listOfItems = $m_sci_Nil$()
    } else {
      const arg1 = this$10.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$10.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      listOfItems = h
    };
    const itemsList = new $c_Ldummy$ItemsList(listOfItems);
    return new $c_Ldummy$ReceivingForm(owner, formNo, ReceivedDate, partNo, truckNumber, billOfLading, origin, itemsList, comments, representative, "{}")
  };
  deleteReceivingForm__V() {
    const toBeDeletedFormNumber = $doubleToInt($uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("tobefetchedformnumber").valueAsNumber));
    const url = ("http://localhost:8080/receivedispatch/receipts/" + toBeDeletedFormNumber);
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("DELETE", url, null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4, toBeDeletedFormNumber$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert(((("\u0641\u0631\u0645 \u0634\u0645\u0627\u0631\u0647 " + "") + $m_Ldummy$().translateToPersian__T__T(("" + toBeDeletedFormNumber$1))) + " \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u06af\u0631\u062f\u06cc\u062f."));
        return $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().open("ReceivingTable.html", "_self", "", true)
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        return (void 0)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, toBeDeletedFormNumber)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  fetchReceivingForm__V() {
    const toBeFetchedFormNumber = $doubleToInt($uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("tobefetchedformnumber").valueAsNumber));
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", "http://localhost:8080/receivedispatch/receipts", null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4, toBeFetchedFormNumber$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const array = JSON.parse($as_T(value.responseText));
        const this$6 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
        const existingFormNumbers = $m_sci_List$().from__sc_IterableOnce__sci_List(this$6);
        if (existingFormNumbers.contains__O__Z(toBeFetchedFormNumber$1)) {
          const url = ("http://localhost:8080/receivedispatch/receipts/" + toBeFetchedFormNumber$1);
          const this$9 = $m_Lorg_scalajs_dom_ext_Ajax$();
          const headers$1 = $m_sci_Map$EmptyMap$();
          this$9.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", url, null, 0, headers$1, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$10) => ((x0$2$2) => {
            const x0$2 = $as_s_util_Try(x0$2$2);
            if ((x0$2 instanceof $c_s_util_Success)) {
              const x2$1 = $as_s_util_Success(x0$2);
              const value$1 = x2$1.s_util_Success__f_value;
              const jsonEncodedForm = JSON.parse($as_T(value$1.responseText));
              const receivingForm = $m_Ldummy$().receivingFormFromJson__sjs_js_Dynamic__Ldummy$ReceivingForm(jsonEncodedForm);
              $m_Ldummy$().populateReceivingTable__Ldummy$ReceivingForm__V(receivingForm)
            } else if ((x0$2 instanceof $c_s_util_Failure)) {
              const x3 = $as_s_util_Failure(x0$2);
              const e = x3.s_util_Failure__f_exception;
              $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
            } else {
              throw new $c_s_MatchError(x0$2)
            }
          }))(this$4)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
          return (void 0)
        } else {
          $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert(((("\u0641\u0631\u0645\u06cc \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 " + "") + $m_Ldummy$().translateToPersian__T__T(("" + toBeFetchedFormNumber$1))) + " \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a."));
          return $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().open("ReceivingTable.html", "_self", "", true)
        }
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3$1 = $as_s_util_Failure(x0$1);
        const e$1 = x3$1.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e$1));
        return (void 0)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, toBeFetchedFormNumber)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  fetchDispatchingForm__V() {
    const toBeFetchedFormNumber = $doubleToInt($uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("tobefetchedformnumber").valueAsNumber));
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", "http://localhost:8080/receivedispatch/dispatches", null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4, toBeFetchedFormNumber$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const array = JSON.parse($as_T(value.responseText));
        const this$6 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
        const existingFormNumbers = $m_sci_List$().from__sc_IterableOnce__sci_List(this$6);
        if (existingFormNumbers.contains__O__Z(toBeFetchedFormNumber$1)) {
          const url = ("http://localhost:8080/receivedispatch/dispatches/" + toBeFetchedFormNumber$1);
          const this$9 = $m_Lorg_scalajs_dom_ext_Ajax$();
          const headers$1 = $m_sci_Map$EmptyMap$();
          this$9.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", url, null, 0, headers$1, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$10) => ((x0$2$2) => {
            const x0$2 = $as_s_util_Try(x0$2$2);
            if ((x0$2 instanceof $c_s_util_Success)) {
              const x2$1 = $as_s_util_Success(x0$2);
              const value$1 = x2$1.s_util_Success__f_value;
              const jsonEncodedForm = JSON.parse($as_T(value$1.responseText));
              const dispatchingForm = $m_Ldummy$().dispatchingFormFromJson__sjs_js_Dynamic__Ldummy$DispatchingForm(jsonEncodedForm);
              $m_Ldummy$().populateDispatchingTable__Ldummy$DispatchingForm__V(dispatchingForm)
            } else if ((x0$2 instanceof $c_s_util_Failure)) {
              const x3 = $as_s_util_Failure(x0$2);
              const e = x3.s_util_Failure__f_exception;
              $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
            } else {
              throw new $c_s_MatchError(x0$2)
            }
          }))(this$4)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
          return (void 0)
        } else {
          $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert(((("\u0641\u0631\u0645\u06cc \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 " + "") + $m_Ldummy$().translateToPersian__T__T(("" + toBeFetchedFormNumber$1))) + " \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a."));
          return $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().open("DispatchingTable.html", "_self", "", true)
        }
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3$1 = $as_s_util_Failure(x0$1);
        const e$1 = x3$1.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e$1));
        return (void 0)
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, toBeFetchedFormNumber)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  populateDispatchingFormOnLoad__I__V(a) {
    const url = ("http://localhost:8080/receivedispatch/dispatches/" + a);
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", url, null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const jsonEncodedForm = JSON.parse($as_T(value.responseText));
        const dispatchingForm = $m_Ldummy$().dispatchingFormFromJson__sjs_js_Dynamic__Ldummy$DispatchingForm(jsonEncodedForm);
        $m_Ldummy$().populateDispatchingForm__Ldummy$DispatchingForm__V(dispatchingForm)
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  submitReceivingForm__V() {
    const doc = this.receivingForm__Lorg_scalajs_dom_raw_Document__Ldummy$ReceivingForm($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument());
    const this$4 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const s = doc.Ldummy$ReceivingForm__f_inJsonString;
    const headers = $m_sci_Map$EmptyMap$();
    this$4.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("POST", "http://localhost:8080/receivedispatch/receipts", s, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$5, doc$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const $$x2 = $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window();
        const $$x1 = $m_Ldummy$();
        const this$6 = doc$1.Ldummy$ReceivingForm__f_number;
        $$x2.alert(((("\u0641\u0631\u0645 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 " + "") + $$x1.translateToPersian__T__T(("" + this$6))) + " \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u06af\u0631\u062f\u06cc\u062f."))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, doc)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  updateReceivingForm__V() {
    const doc = this.receivingForm__Lorg_scalajs_dom_raw_Document__Ldummy$ReceivingForm($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument());
    const url = ("http://localhost:8080/receivedispatch/receipts/" + doc.Ldummy$ReceivingForm__f_number);
    const this$4 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const s = doc.Ldummy$ReceivingForm__f_inJsonString;
    const headers = $m_sci_Map$EmptyMap$();
    this$4.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("PUT", url, s, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$5, doc$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const $$x2 = $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window();
        const $$x1 = $m_Ldummy$();
        const this$6 = doc$1.Ldummy$ReceivingForm__f_number;
        $$x2.alert(((("\u0641\u0631\u0645 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 " + "") + $$x1.translateToPersian__T__T(("" + this$6))) + " \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0635\u0644\u0627\u062d \u06af\u0631\u062f\u06cc\u062f."))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, doc)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  submitDispatchingForm__V() {
    const doc = this.dispathingForm__Lorg_scalajs_dom_raw_Document__Ldummy$DispatchingForm($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument());
    const this$4 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const s = doc.Ldummy$DispatchingForm__f_inJsonString;
    const headers = $m_sci_Map$EmptyMap$();
    this$4.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("POST", "http://localhost:8080/receivedispatch/dispatches", s, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$5, doc$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const $$x2 = $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window();
        const $$x1 = $m_Ldummy$();
        const this$6 = doc$1.Ldummy$DispatchingForm__f_number;
        $$x2.alert(((("\u0641\u0631\u0645 \u062e\u0631\u0648\u062c \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 " + "") + $$x1.translateToPersian__T__T(("" + this$6))) + " \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u06af\u0631\u062f\u06cc\u062f."))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, doc)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  updateDispatchingForm__V() {
    const doc = this.dispathingForm__Lorg_scalajs_dom_raw_Document__Ldummy$DispatchingForm($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument());
    const url = ("http://localhost:8080/receivedispatch/dispatches/" + doc.Ldummy$DispatchingForm__f_number);
    const this$4 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const s = doc.Ldummy$DispatchingForm__f_inJsonString;
    const headers = $m_sci_Map$EmptyMap$();
    this$4.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("POST", url, s, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$5, doc$1) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const $$x2 = $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window();
        const $$x1 = $m_Ldummy$();
        const this$6 = doc$1.Ldummy$DispatchingForm__f_number;
        $$x2.alert(((("\u0641\u0631\u0645 \u062e\u0631\u0648\u062c \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 " + "") + $$x1.translateToPersian__T__T(("" + this$6))) + " \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0635\u0644\u0627\u062d \u06af\u0631\u062f\u06cc\u062f."))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const e = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + e))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this, doc)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  fetchPeople__V() {
    const this$3 = $m_Lorg_scalajs_dom_ext_Ajax$();
    const headers = $m_sci_Map$EmptyMap$();
    this$3.apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future("GET", "http://localhost:8080/receivedispatch/people", null, 0, headers, false, "").onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((this$4) => ((x0$1$2) => {
      const x0$1 = $as_s_util_Try(x0$1$2);
      if ((x0$1 instanceof $c_s_util_Success)) {
        const x2 = $as_s_util_Success(x0$1);
        const value = x2.s_util_Success__f_value;
        const $$x1 = $m_Ldummy$();
        const array = JSON.parse($as_T(value.responseText));
        const this$6 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
        const this$8 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$6);
        const f = ((this$7) => ((x$2) => new $c_Ldummy$Person($dp_toString__T(x$2.FirstName), $dp_toString__T(x$2.SurName), $dp_toString__T(x$2.NationalIDNo))))(this$4);
        let this$11;
        if ((this$8 === $m_sci_Nil$())) {
          this$11 = $m_sci_Nil$()
        } else {
          const arg1 = this$8.head__O();
          const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
          let t = h;
          let rest = $as_sci_List(this$8.tail__O());
          while ((rest !== $m_sci_Nil$())) {
            const arg1$1 = rest.head__O();
            const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
            t.sci_$colon$colon__f_next = nx;
            t = nx;
            rest = $as_sci_List(rest.tail__O())
          };
          this$11 = h
        };
        const f$1 = ((this$2$1) => ((x$3$2) => {
          const x$3 = $as_Ldummy$Person(x$3$2);
          const self = x$3.Ldummy$Person__f_nationalIDNo;
          return new $c_T2(self, x$3)
        }))(this$4);
        let this$13;
        if ((this$11 === $m_sci_Nil$())) {
          this$13 = $m_sci_Nil$()
        } else {
          const arg1$2 = this$11.head__O();
          const h$1 = new $c_sci_$colon$colon(f$1(arg1$2), $m_sci_Nil$());
          let t$1 = h$1;
          let rest$1 = $as_sci_List(this$11.tail__O());
          while ((rest$1 !== $m_sci_Nil$())) {
            const arg1$3 = rest$1.head__O();
            const nx$1 = new $c_sci_$colon$colon(f$1(arg1$3), $m_sci_Nil$());
            t$1.sci_$colon$colon__f_next = nx$1;
            t$1 = nx$1;
            rest$1 = $as_sci_List(rest$1.tail__O())
          };
          this$13 = h$1
        };
        $m_s_$less$colon$less$();
        $$x1.populateDataList__sci_Map__V($m_sci_Map$().from__sc_IterableOnce__sci_Map(this$13))
      } else if ((x0$1 instanceof $c_s_util_Failure)) {
        const x3 = $as_s_util_Failure(x0$1);
        const error = x3.s_util_Failure__f_exception;
        $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert((":\u062e\u0637\u0627 \u062f\u0631 \u0627\u062c\u0631\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627 \u0635\u062f\u0648\u0631 \u06a9\u062f\n" + error))
      } else {
        throw new $c_s_MatchError(x0$1)
      }
    }))(this)), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)
  };
  populateDataList__sci_Map__V(fetchedPeople) {
    const this$1 = new $c_sc_MapOps$$anon$1(fetchedPeople);
    const this$2 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$1);
    let these = this$2;
    while ((!these.isEmpty__Z())) {
      const arg1 = these.head__O();
      const person = $as_Ldummy$Person(arg1);
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("fname").appendChild($m_Ldummy$().addOption__T__T__T__Lorg_scalajs_dom_raw_Node(person.Ldummy$Person__f_firstName, person.Ldummy$Person__f_surName, person.Ldummy$Person__f_nationalIDNo));
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("lname").appendChild($m_Ldummy$().addOption__T__T__T__Lorg_scalajs_dom_raw_Node(person.Ldummy$Person__f_firstName, person.Ldummy$Person__f_surName, person.Ldummy$Person__f_nationalIDNo));
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("nidno").appendChild($m_Ldummy$().addOption__T__T__T__Lorg_scalajs_dom_raw_Node(person.Ldummy$Person__f_firstName, person.Ldummy$Person__f_surName, person.Ldummy$Person__f_nationalIDNo));
      these = $as_sci_List(these.tail__O())
    }
  };
  addOption__T__T__T__Lorg_scalajs_dom_raw_Node(firstName, surName, nationalIDNo) {
    const newOption = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("option");
    newOption.innerHTML = ((((firstName + " ") + surName) + " ") + this.translateToPersian__T__T(nationalIDNo));
    newOption.setAttribute("value", nationalIDNo);
    newOption.setAttribute("firstName", firstName);
    newOption.setAttribute("surName", surName);
    newOption.setAttribute("nationalIDNo", nationalIDNo);
    return newOption
  };
  propagatePersonArticleSelection__T__T__V(personList, article) {
    const coll = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("fname").children;
    const this$2 = new $c_Lorg_scalajs_dom_ext_package$PimpedHtmlCollection(coll);
    const this$4 = $m_sci_List$().from__sc_IterableOnce__sci_List(this$2);
    const f = ((this$3) => ((x$2) => new $c_T2($p_Ldummy$__person$1__Lorg_scalajs_dom_raw_Element__Ldummy$Person(this$3, x$2).Ldummy$Person__f_nationalIDNo, $p_Ldummy$__person$1__Lorg_scalajs_dom_raw_Element__Ldummy$Person(this$3, x$2))))(this);
    let this$6;
    if ((this$4 === $m_sci_Nil$())) {
      this$6 = $m_sci_Nil$()
    } else {
      const arg1 = this$4.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$4.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      this$6 = h
    };
    $m_s_$less$colon$less$();
    const fetchedPeople = $m_sci_Map$().from__sc_IterableOnce__sci_Map(this$6);
    const selected = $as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(((personList + "_") + article)).value);
    if (fetchedPeople.contains__O__Z(selected)) {
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById((personList + "_nationalidno")).value = this.translateToPersian__T__T($as_Ldummy$Person(fetchedPeople.apply__O__O(selected)).Ldummy$Person__f_nationalIDNo);
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById((personList + "_firstname")).value = $as_Ldummy$Person(fetchedPeople.apply__O__O(selected)).Ldummy$Person__f_firstName;
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById((personList + "_lastname")).value = $as_Ldummy$Person(fetchedPeople.apply__O__O(selected)).Ldummy$Person__f_surName
    }
  };
  addNewRowToItemsList__Lorg_scalajs_dom_raw_Node() {
    const itemsList = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist");
    const rowsCount = $uI(itemsList.childElementCount);
    return itemsList.appendChild(this.newRow__I__Lorg_scalajs_dom_raw_Node(((1 + rowsCount) | 0)))
  };
  removeRowFromItemsList__I__V(Row) {
    const itemsList = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist");
    itemsList.removeChild($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("items_" + Row)));
    const rowsCount = $uI(itemsList.childElementCount);
    const x = ((1 + Row) | 0);
    const end = ((1 + rowsCount) | 0);
    const isEmpty = (x > end);
    if ((!isEmpty)) {
      let i = x;
      while (true) {
        const v1 = i;
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("items_" + v1)).setAttribute("id", ("items_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rowremovebutton_" + v1)).setAttribute("onclick", (("removeRowFromItemsList(" + (((-1) + v1) | 0)) + ")"));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rowremovebutton_" + v1)).setAttribute("id", ("rowremovebutton_" + (((-1) + v1) | 0)));
        const $$x2 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rownumber_" + v1));
        const $$x1 = $m_Ldummy$();
        const this$8 = (((-1) + v1) | 0);
        $$x2.innerHTML = $$x1.translateToPersian__T__T(("" + this$8));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("rownumber_" + v1)).setAttribute("id", ("rownumber_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_description_" + v1)).setAttribute("id", ("itemslist_description_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_quantity_" + v1)).setAttribute("id", ("itemslist_quantity_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + v1)).setAttribute("id", ("itemslist_unitofmeasurement_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_grossweight_" + v1)).setAttribute("id", ("itemslist_grossweight_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_packageweight_" + v1)).setAttribute("id", ("itemslist_packageweight_" + (((-1) + v1) | 0)));
        $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_netweight_" + v1)).setAttribute("id", ("itemslist_netweight_" + (((-1) + v1) | 0)));
        if ((i === end)) {
          break
        };
        i = ((1 + i) | 0)
      }
    };
    this.updateSummary__V()
  };
  updateSummary__V() {
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("qty_sum").innerHTML = "\u06f0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("unit_sum").innerHTML = "-";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("gw_sum").innerHTML = "\u06f0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("pw_sum").innerHTML = "\u06f0";
    $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("nw_sum").innerHTML = "\u06f0";
    const rowsCount = $uI($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist").childElementCount);
    const $$x1 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("unit_sum");
    const this$1 = $as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("itemslist_unitofmeasurement_1").value);
    $$x1.innerHTML = this$1;
    const isEmpty = (rowsCount < 1);
    if ((!isEmpty)) {
      let i = 1;
      while (true) {
        const v1 = i;
        const this$8 = $as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + v1)).value);
        const this$9 = $as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("unit_sum").innerHTML);
        if ((this$8 === this$9)) {
          const x = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("qty_sum").innerHTML));
          const qtySum = $m_jl_Double$().parseDouble__T__D(x);
          const $$x2 = $m_Ldummy$();
          const this$12 = $uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_quantity_" + v1)).valueAsNumber);
          const x$1 = $$x2.translateToEnglish__T__T(("" + this$12));
          const qty = $m_jl_Double$().parseDouble__T__D(x$1);
          const $$x4 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("qty_sum");
          const $$x3 = $m_Ldummy$();
          const this$16 = (qtySum + qty);
          $$x4.innerHTML = $$x3.translateToPersian__T__T(("" + this$16))
        } else {
          $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("qty_sum").innerHTML = "-";
          $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("unit_sum").innerHTML = "-"
        };
        const $$x5 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("unit_sum");
        const this$18 = $as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_unitofmeasurement_" + v1)).value);
        $$x5.innerHTML = this$18;
        const x$2 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("gw_sum").innerHTML));
        const gwSum = $m_jl_Double$().parseDouble__T__D(x$2);
        const x$3 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("pw_sum").innerHTML));
        const pwSum = $m_jl_Double$().parseDouble__T__D(x$3);
        const x$4 = $m_Ldummy$().translateToEnglish__T__T($as_T($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("nw_sum").innerHTML));
        const nwSum = $m_jl_Double$().parseDouble__T__D(x$4);
        const $$x6 = $m_Ldummy$();
        const this$25 = $uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_grossweight_" + v1)).valueAsNumber);
        const x$5 = $$x6.translateToEnglish__T__T(("" + this$25));
        const gw = $m_jl_Double$().parseDouble__T__D(x$5);
        const $$x7 = $m_Ldummy$();
        const this$29 = $uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_packageweight_" + v1)).valueAsNumber);
        const x$6 = $$x7.translateToEnglish__T__T(("" + this$29));
        const pw = $m_jl_Double$().parseDouble__T__D(x$6);
        const $$x8 = $m_Ldummy$();
        const this$33 = $uD($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById(("itemslist_netweight_" + v1)).valueAsNumber);
        const x$7 = $$x8.translateToEnglish__T__T(("" + this$33));
        const nw = $m_jl_Double$().parseDouble__T__D(x$7);
        const $$x10 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("gw_sum");
        const $$x9 = $m_Ldummy$();
        const this$37 = (gwSum + gw);
        $$x10.innerHTML = $$x9.translateToPersian__T__T(("" + this$37));
        const $$x12 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("pw_sum");
        const $$x11 = $m_Ldummy$();
        const this$39 = (pwSum + pw);
        $$x12.innerHTML = $$x11.translateToPersian__T__T(("" + this$39));
        const $$x14 = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("nw_sum");
        const $$x13 = $m_Ldummy$();
        const this$41 = (nwSum + nw);
        $$x14.innerHTML = $$x13.translateToPersian__T__T(("" + this$41));
        if ((i === rowsCount)) {
          break
        };
        i = ((1 + i) | 0)
      }
    }
  };
  newRow__I__Lorg_scalajs_dom_raw_Node(RowNumber) {
    const newItems = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("div");
    newItems.classList.add("row");
    newItems.setAttribute("id", ("items_" + RowNumber));
    const x = (((((((((((((((((((("\n         |<div class=\"col-1\">\n         |  <div class=\"row\">\n         |    <button class=\"btn btn-outline-danger col-6 rounded-0\" type=\"button\" onclick=\"removeRowFromItemsList(" + RowNumber) + ")\" id=\"rowremovebutton_") + RowNumber) + "\">--</button>\n         |    <span class=\"form-control col-6 rounded-0\" id=\"rownumber_") + RowNumber) + "\">") + this.translateToPersian__T__T(("" + RowNumber))) + "</span>\n         |  </div>\n         |</div>\n         |<input type=\"text\" class=\"form-control col-3 rounded-0\" placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0644\u0627\" id=\"itemslist_description_") + RowNumber) + "\" onchange=\"updateSummary()\">\n         |<input type=\"number\" class=\"form-control col-1 rounded-0\" min=\"0\" id=\"itemslist_quantity_") + RowNumber) + "\" min=\"0\" step=\"any\" value=\"0\" onchange=\"updateSummary()\">\n         |<input type=\"text\" class=\"form-control col-1 rounded-0\" placeholder=\"-\" id=\"itemslist_unitofmeasurement_") + RowNumber) + "\" onchange=\"updateSummary()\">\n         |<input type=\"number\" class=\"form-control col-2 rounded-0\" id=\"itemslist_grossweight_") + RowNumber) + "\" min=\"0\" step=\"any\" value=\"0\" onchange=\"updateSummary()\">\n         |<input type=\"number\" class=\"form-control col-2 rounded-0\" id=\"itemslist_packageweight_") + RowNumber) + "\" min=\"0\" step=\"any\" value=\"0\" onchange=\"updateSummary()\">\n         |<input type=\"number\" class=\"form-control col-2 rounded-0\" id=\"itemslist_netweight_") + RowNumber) + "\" min=\"0\" step=\"any\" value=\"0\" onchange=\"updateSummary()\">\n         |");
    newItems.innerHTML = $m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124);
    return newItems
  };
  translatePlateArea__T__T(abbreviation) {
    const this$56 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2("a", "\u0627\u0644\u0641"), new $c_T2("b", "\u0628"), new $c_T2("p", "\u067e"), new $c_T2("t", "\u062a"), new $c_T2("th", "\u062b"), new $c_T2("j", "\u062c"), new $c_T2("d", "\u062f"), new $c_T2("z", "\u0632"), new $c_T2("zh", "\u0698"), new $c_T2("s", "\u0633"), new $c_T2("sh", "\u0634"), new $c_T2("ss", "\u0635"), new $c_T2("tt", "\u0637"), new $c_T2("e", "\u0639"), new $c_T2("f", "\u0641"), new $c_T2("q", "\u0642"), new $c_T2("k", "\u06a9"), new $c_T2("g", "\u06af"), new $c_T2("l", "\u0644"), new $c_T2("m", "\u0645"), new $c_T2("n", "\u0646"), new $c_T2("v", "\u0648"), new $c_T2("h", "\u0647"), new $c_T2("y", "\u06cc"), new $c_T2("dd", "D"), new $c_T2("sss", "S")];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    const dictionary = this$56.from__sc_IterableOnce__sci_Map(elems);
    return $as_T(dictionary.apply__O__O(abbreviation))
  };
  translateToPersian__T__T(unknown) {
    const this$50 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2($bC(1643), $bC(1643)), new $c_T2($bC(46), $bC(1643)), new $c_T2($bC(47), $bC(47)), new $c_T2($bC(49), $bC(1777)), new $c_T2($bC(50), $bC(1778)), new $c_T2($bC(51), $bC(1779)), new $c_T2($bC(52), $bC(1780)), new $c_T2($bC(53), $bC(1781)), new $c_T2($bC(54), $bC(1782)), new $c_T2($bC(55), $bC(1783)), new $c_T2($bC(56), $bC(1784)), new $c_T2($bC(57), $bC(1785)), new $c_T2($bC(48), $bC(1776)), new $c_T2($bC(1777), $bC(1777)), new $c_T2($bC(1778), $bC(1778)), new $c_T2($bC(1779), $bC(1779)), new $c_T2($bC(1780), $bC(1780)), new $c_T2($bC(1781), $bC(1781)), new $c_T2($bC(1782), $bC(1782)), new $c_T2($bC(1783), $bC(1783)), new $c_T2($bC(1784), $bC(1784)), new $c_T2($bC(1785), $bC(1785)), new $c_T2($bC(1776), $bC(1776))];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    const persianDigits = this$50.from__sc_IterableOnce__sci_Map(elems);
    const len = $uI(unknown.length);
    const dst = $newArrayObject($d_C.getArrayOf(), [len]);
    let i = 0;
    while ((i < len)) {
      const $$x1 = i;
      const index = i;
      const arg1 = (65535 & $uI(unknown.charCodeAt(index)));
      dst.set($$x1, $uC(persianDigits.apply__O__O($bC(arg1))));
      i = ((1 + i) | 0)
    };
    const this$53 = $m_jl_String$();
    return this$53.new__AC__I__I__T(dst, 0, dst.u.length)
  };
  translateToEnglish__T__T(unknown) {
    const this$50 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2($bC(1643), $bC(46)), new $c_T2($bC(46), $bC(46)), new $c_T2($bC(47), $bC(47)), new $c_T2($bC(49), $bC(49)), new $c_T2($bC(50), $bC(50)), new $c_T2($bC(51), $bC(51)), new $c_T2($bC(52), $bC(52)), new $c_T2($bC(53), $bC(53)), new $c_T2($bC(54), $bC(54)), new $c_T2($bC(55), $bC(55)), new $c_T2($bC(56), $bC(56)), new $c_T2($bC(57), $bC(57)), new $c_T2($bC(48), $bC(48)), new $c_T2($bC(1777), $bC(49)), new $c_T2($bC(1778), $bC(50)), new $c_T2($bC(1779), $bC(51)), new $c_T2($bC(1780), $bC(52)), new $c_T2($bC(1781), $bC(53)), new $c_T2($bC(1782), $bC(54)), new $c_T2($bC(1783), $bC(55)), new $c_T2($bC(1784), $bC(56)), new $c_T2($bC(1785), $bC(57)), new $c_T2($bC(1776), $bC(48))];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    const englishDigits = this$50.from__sc_IterableOnce__sci_Map(elems);
    const len = $uI(unknown.length);
    const dst = $newArrayObject($d_C.getArrayOf(), [len]);
    let i = 0;
    while ((i < len)) {
      const $$x1 = i;
      const index = i;
      const arg1 = (65535 & $uI(unknown.charCodeAt(index)));
      dst.set($$x1, $uC(englishDigits.apply__O__O($bC(arg1))));
      i = ((1 + i) | 0)
    };
    const this$53 = $m_jl_String$();
    return this$53.new__AC__I__I__T(dst, 0, dst.u.length)
  };
  person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(firstName, surName, nationalIDNo) {
    return new $c_Ldummy$Person($as_T(firstName.value), $as_T(surName.value), this.translateToEnglish__T__T($as_T(nationalIDNo.value)))
  };
  carPlate__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$CarPlate(state, serial, area, random) {
    const this$1 = $uD(state.valueAsNumber);
    const x = this.translateToEnglish__T__T(("" + this$1));
    const this$5 = $m_jl_Integer$();
    const $$x3 = this$5.parseInt__T__I__I(x, 10);
    const this$6 = $uD(serial.valueAsNumber);
    const x$1 = this.translateToEnglish__T__T(("" + this$6));
    const this$10 = $m_jl_Integer$();
    const $$x2 = this$10.parseInt__T__I__I(x$1, 10);
    const $$x1 = $as_T(area.value);
    const this$11 = $uD(random.valueAsNumber);
    const x$2 = this.translateToEnglish__T__T(("" + this$11));
    const this$15 = $m_jl_Integer$();
    return new $c_Ldummy$CarPlate($$x3, $$x2, $$x1, this$15.parseInt__T__I__I(x$2, 10))
  };
  date__Lorg_scalajs_dom_raw_Element__Ldummy$Date(dateElement) {
    const date = this.translateToEnglish__T__T($as_T(dateElement.value));
    return new $c_Ldummy$Date($f_T__split__T__I__AT(date, "/", 0).get(0), $f_T__split__T__I__AT(date, "/", 0).get(1), $f_T__split__T__I__AT(date, "/", 0).get(2))
  };
  item__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Item(description, quantity, unitOfMeasurement, grossWeight, packageWeight, netWeight) {
    const $$x5 = $as_T(description.value);
    const this$1 = $uD(quantity.valueAsNumber);
    const x = this.translateToEnglish__T__T(("" + this$1));
    const this$5 = $m_jl_Integer$();
    const $$x4 = this$5.parseInt__T__I__I(x, 10);
    const $$x3 = $as_T(unitOfMeasurement.value);
    const this$6 = $uD(grossWeight.valueAsNumber);
    const x$1 = this.translateToEnglish__T__T(("" + this$6));
    const $$x2 = $m_jl_Double$().parseDouble__T__D(x$1);
    const this$10 = $uD(packageWeight.valueAsNumber);
    const x$2 = this.translateToEnglish__T__T(("" + this$10));
    const $$x1 = $m_jl_Double$().parseDouble__T__D(x$2);
    const this$14 = $uD(netWeight.valueAsNumber);
    const x$3 = this.translateToEnglish__T__T(("" + this$14));
    return new $c_Ldummy$Item($$x5, $$x4, $$x3, $$x2, $$x1, $m_jl_Double$().parseDouble__T__D(x$3))
  };
  dispathingForm__Lorg_scalajs_dom_raw_Document__Ldummy$DispatchingForm(document) {
    const owner = this.person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(document.getElementById("goodsowner_firstname"), document.getElementById("goodsowner_lastname"), document.getElementById("goodsowner_nationalidno"));
    const this$1 = $doubleToInt($uD(document.getElementById("formno").valueAsNumber));
    const x = this.translateToEnglish__T__T(("" + this$1));
    const this$5 = $m_jl_Integer$();
    const formNo = this$5.parseInt__T__I__I(x, 10);
    const dispatchedDate = this.date__Lorg_scalajs_dom_raw_Element__Ldummy$Date(document.getElementById("dispatcheddate"));
    const this$6 = $doubleToInt($uD(document.getElementById("partno").valueAsNumber));
    const x$1 = this.translateToEnglish__T__T(("" + this$6));
    const this$10 = $m_jl_Integer$();
    const partNo = this$10.parseInt__T__I__I(x$1, 10);
    const draftDate = this.date__Lorg_scalajs_dom_raw_Element__Ldummy$Date(document.getElementById("draftdate"));
    const draftNumber = $as_T(document.getElementById("draftno").value);
    const draftOwner = this.person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(document.getElementById("draftowner_firstname"), document.getElementById("draftowner_lastname"), document.getElementById("draftowner_nationalidno"));
    const truckNumber = this.carPlate__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$CarPlate(document.getElementById("truckno_state"), document.getElementById("truckno_serial"), document.getElementById("truckno_area"), document.getElementById("truckno_random"));
    const rowsCount = $uI(document.getElementById("itemslist").childElementCount);
    const this$11 = $m_sci_List$();
    const end = ((1 + rowsCount) | 0);
    const evidence$3 = $m_s_math_Numeric$IntIsIntegral$();
    const this$13 = $as_sci_List($f_sc_IterableFactory__range__O__O__s_math_Integral__O(this$11, 1, end, evidence$3));
    const f = ((this$12, document$1) => ((i$2) => {
      const i = $uI(i$2);
      return $m_Ldummy$().item__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Item(document$1.getElementById(("itemslist_description_" + i)), document$1.getElementById(("itemslist_quantity_" + i)), document$1.getElementById(("itemslist_unitofmeasurement_" + i)), document$1.getElementById(("itemslist_grossweight_" + i)), document$1.getElementById(("itemslist_packageweight_" + i)), document$1.getElementById(("itemslist_netweight_" + i)))
    }))(this, document);
    let listOfItems;
    if ((this$13 === $m_sci_Nil$())) {
      listOfItems = $m_sci_Nil$()
    } else {
      const arg1 = this$13.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$13.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      listOfItems = h
    };
    const itemsList = new $c_Ldummy$ItemsList(listOfItems);
    const comments = $as_T(document.getElementById("comments").value);
    const assignee = this.person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(document.getElementById("assignee_firstname"), document.getElementById("assignee_lastname"), document.getElementById("assignee_nationalidno"));
    const x$2 = (((((((((((((((((((((("{\n         |\"FormNo\": " + formNo) + ",\n         |\"DispatchedDate\": ") + dispatchedDate.toJsonString__T()) + ",\n         |\"GoodsOwner\": ") + owner.toJsonString__T()) + ",\n         |\"DraftNo\": \"") + draftNumber) + "\",\n         |\"PartNo\": ") + partNo) + ",\n         |\"TruckNo\": ") + truckNumber.toJsonString__T()) + ",\n         |\"DraftOwner\": ") + draftOwner.toJsonString__T()) + ",\n         |\"DraftDate\": ") + draftDate.toJsonString__T()) + ",\n         |\"ItemsList\": ") + itemsList.toJsonString__T()) + ",\n         |\"Comments\": \"") + comments) + "\",\n         |\"Assignee\": ") + assignee.toJsonString__T()) + "\n         |}");
    const documentToJsonString = $m_sc_StringOps$().stripMargin$extension__T__C__T(x$2, 124);
    return new $c_Ldummy$DispatchingForm(owner, formNo, dispatchedDate, partNo, truckNumber, draftDate, draftNumber, draftOwner, itemsList, comments, assignee, documentToJsonString)
  };
  receivingForm__Lorg_scalajs_dom_raw_Document__Ldummy$ReceivingForm(document) {
    const owner = this.person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(document.getElementById("goodsowner_firstname"), document.getElementById("goodsowner_lastname"), document.getElementById("goodsowner_nationalidno"));
    const this$1 = $doubleToInt($uD(document.getElementById("formno").valueAsNumber));
    const x = this.translateToEnglish__T__T(("" + this$1));
    const this$5 = $m_jl_Integer$();
    const formNo = this$5.parseInt__T__I__I(x, 10);
    const receivedDate = this.date__Lorg_scalajs_dom_raw_Element__Ldummy$Date(document.getElementById("receiveddate"));
    const this$6 = $doubleToInt($uD(document.getElementById("partno").valueAsNumber));
    const x$1 = this.translateToEnglish__T__T(("" + this$6));
    const this$10 = $m_jl_Integer$();
    const partNo = this$10.parseInt__T__I__I(x$1, 10);
    const billOfLadingNumber = $as_T(document.getElementById("billofladingno").value);
    const origin = $as_T(document.getElementById("origin").value);
    const truckNumber = this.carPlate__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$CarPlate(document.getElementById("truckno_state"), document.getElementById("truckno_serial"), document.getElementById("truckno_area"), document.getElementById("truckno_random"));
    const rowsCount = $uI(document.getElementById("itemslist").childElementCount);
    const this$11 = $m_sci_List$();
    const end = ((1 + rowsCount) | 0);
    const evidence$3 = $m_s_math_Numeric$IntIsIntegral$();
    const this$13 = $as_sci_List($f_sc_IterableFactory__range__O__O__s_math_Integral__O(this$11, 1, end, evidence$3));
    const f = ((this$12, document$1) => ((i$2) => {
      const i = $uI(i$2);
      return $m_Ldummy$().item__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Item(document$1.getElementById(("itemslist_description_" + i)), document$1.getElementById(("itemslist_quantity_" + i)), document$1.getElementById(("itemslist_unitofmeasurement_" + i)), document$1.getElementById(("itemslist_grossweight_" + i)), document$1.getElementById(("itemslist_packageweight_" + i)), document$1.getElementById(("itemslist_netweight_" + i)))
    }))(this, document);
    let listOfItems;
    if ((this$13 === $m_sci_Nil$())) {
      listOfItems = $m_sci_Nil$()
    } else {
      const arg1 = this$13.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$13.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      listOfItems = h
    };
    const itemsList = new $c_Ldummy$ItemsList(listOfItems);
    const comments = $as_T(document.getElementById("comments").value);
    const representative = this.person__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Lorg_scalajs_dom_raw_Element__Ldummy$Person(document.getElementById("representative_firstname"), document.getElementById("representative_lastname"), document.getElementById("representative_nationalidno"));
    const x$2 = (((((((((((((((((((("{\n         |\"FormNo\": " + formNo) + ",\n         |\"ReceivedDate\": ") + receivedDate.toJsonString__T()) + ",\n         |\"GoodsOwner\": ") + owner.toJsonString__T()) + ",\n         |\"BillOfLadingNo\": \"") + billOfLadingNumber) + "\",\n         |\"PartNo\": ") + partNo) + ",\n         |\"Origin\": \"") + origin) + "\",\n         |\"TruckNo\": ") + truckNumber.toJsonString__T()) + ",\n         |\"ItemsList\": ") + itemsList.toJsonString__T()) + ",\n         |\"Comments\": \"") + comments) + "\",\n         |\"Representative\": ") + representative.toJsonString__T()) + "\n         |}");
    const documentToJsonString = $m_sc_StringOps$().stripMargin$extension__T__C__T(x$2, 124);
    return new $c_Ldummy$ReceivingForm(owner, formNo, receivedDate, partNo, truckNumber, billOfLadingNumber, origin, itemsList, comments, representative, documentToJsonString)
  };
}
const $d_Ldummy$ = new $TypeData().initClass({
  Ldummy$: 0
}, false, "dummy$", {
  Ldummy$: 1,
  O: 1
});
$c_Ldummy$.prototype.$classData = $d_Ldummy$;
let $n_Ldummy$ = (void 0);
function $m_Ldummy$() {
  if ((!$n_Ldummy$)) {
    $n_Ldummy$ = new $c_Ldummy$()
  };
  return $n_Ldummy$
}
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getComponentType__jl_Class() {
    return $as_jl_Class(this.jl_Class__f_data.getComponentType())
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
const $d_jl_Runnable = new $TypeData().initClass({
  jl_Runnable: 0
}, true, "java.lang.Runnable", {
  jl_Runnable: 1,
  O: 1
});
const $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement = (function($thiz, stackdata) {
  const lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, stackdata);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines)
});
const $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement = (function($thiz, lines) {
  const NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension__T__O("^([^\\@]*)\\@(.*):([0-9]+)$");
  const NormalizedFrameLineWithColumn = $m_jl_StackTrace$StringRE$().re$extension__T__O("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$");
  const trace = [];
  let i = 0;
  while ((i < $uI(lines.length))) {
    const line = $as_T(lines[i]);
    if ((line !== "")) {
      const mtch1 = NormalizedFrameLineWithColumn.exec(line);
      if ((mtch1 !== null)) {
        const x = mtch1[1];
        const classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        const $$x3 = $as_T(classAndMethodName[0]);
        const $$x2 = $as_T(classAndMethodName[1]);
        const x$1 = mtch1[2];
        const $$x1 = $as_T(x$1);
        const x$2 = mtch1[3];
        const s = $as_T(x$2);
        const elem = new $c_jl_StackTraceElement($$x3, $$x2, $$x1, $uI(parseInt(s)));
        const x$3 = mtch1[4];
        const s$1 = $as_T(x$3);
        elem.jl_StackTraceElement__f_columnNumber = $uI(parseInt(s$1));
        $uI(trace.push(elem))
      } else {
        const mtch2 = NormalizedFrameLine.exec(line);
        if ((mtch2 !== null)) {
          const x$4 = mtch2[1];
          const classAndMethodName$2 = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x$4));
          const $$x7 = $as_T(classAndMethodName$2[0]);
          const $$x6 = $as_T(classAndMethodName$2[1]);
          const x$5 = mtch2[2];
          const $$x5 = $as_T(x$5);
          const x$6 = mtch2[3];
          const s$2 = $as_T(x$6);
          const $$x4 = trace.push(new $c_jl_StackTraceElement($$x7, $$x6, $$x5, $uI(parseInt(s$2))));
          $uI($$x4)
        } else {
          $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1))))
        }
      }
    };
    i = ((1 + i) | 0)
  };
  const len = $uI(trace.length);
  const result = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [len]);
  i = 0;
  while ((i < len)) {
    result.set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractClassMethod__T__O = (function($thiz, functionName) {
  const PatC = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  const PatS = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  const PatCT = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  const PatN = $m_jl_StackTrace$StringRE$().re$extension__T__O("^new (?:Object\\.|\\[object Object\\]\\.)?\\$c_([^\\.]+)$");
  const PatM = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(?:Object\\.|\\[object Object\\]\\.)?\\$m_([^\\.]+)$");
  const matchC = PatC.exec(functionName);
  const matchCOrS = ((matchC !== null) ? matchC : PatS.exec(functionName));
  if ((matchCOrS !== null)) {
    const x = matchCOrS[1];
    const $$x1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    const x$1 = matchCOrS[2];
    return [$$x1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))]
  } else {
    const matchCT = PatCT.exec(functionName);
    const matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      const x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"]
    } else {
      const matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        const x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"]
      } else {
        return ["<jscode>", functionName]
      }
    }
  }
});
const $p_jl_StackTrace$__decodeClassName__T__T = (function($thiz, encodedName) {
  const dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  let base;
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    const dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    base = $as_T(dict$1[encodedName])
  } else {
    base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName)
  };
  const this$4 = $as_T(base.split("_").join("."));
  return $as_T(this$4.split("\uff3f").join("_"))
});
const $p_jl_StackTrace$__decompressedClasses$lzycompute__O = (function($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    let index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        const key = ("T" + index);
        const value = ("scala_Tuple" + index);
        dict[key] = value
      };
      const key$1 = ("F" + index);
      const value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0)
    };
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedClasses
});
const $p_jl_StackTrace$__decompressedClasses__O = (function($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses)
});
const $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    const dict = {};
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedPrefixes
});
const $p_jl_StackTrace$__decompressedPrefixes__O = (function($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes)
});
const $p_jl_StackTrace$__compressedPrefixes$lzycompute__O = (function($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_compressedPrefixes
});
const $p_jl_StackTrace$__compressedPrefixes__O = (function($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes)
});
const $p_jl_StackTrace$__decodeMethodName__T__T = (function($thiz, encodedName) {
  if ((($uI(encodedName.length) >= 0) && ($as_T(encodedName.substring(0, $uI("init___".length))) === "init___"))) {
    return "<init>"
  } else {
    const methodNameLen = $uI(encodedName.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)))
  }
});
const $p_jl_StackTrace$__normalizeStackTraceLines__O__O = (function($thiz, e) {
  const x = (!e);
  if ($uZ((!(!x)))) {
    return []
  } else {
    const x$1 = (e.arguments && e.stack);
    if ($uZ((!(!x$1)))) {
      return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
    } else {
      const x$2 = (e.stack && e.sourceURL);
      if ($uZ((!(!x$2)))) {
        return $p_jl_StackTrace$__extractSafari__O__O($thiz, e)
      } else {
        const x$3 = (e.stack && e.number);
        if ($uZ((!(!x$3)))) {
          return $p_jl_StackTrace$__extractIE__O__O($thiz, e)
        } else {
          const x$4 = (e.stack && e.fileName);
          if ($uZ((!(!x$4)))) {
            return $p_jl_StackTrace$__extractFirefox__O__O($thiz, e)
          } else {
            const x$5 = (e.message && e["opera#sourceloc"]);
            if ($uZ((!(!x$5)))) {
              const x$6 = (!e.stacktrace);
              if ($uZ((!(!x$6)))) {
                return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
              } else {
                const x$7 = ((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length));
                if ($uZ((!(!x$7)))) {
                  return $p_jl_StackTrace$__extractOpera9__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e)
                }
              }
            } else {
              const x$8 = ((e.message && e.stack) && e.stacktrace);
              if ($uZ((!(!x$8)))) {
                const x$9 = (e.stacktrace.indexOf("called from line") < 0.0);
                if ($uZ((!(!x$9)))) {
                  return $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)
                }
              } else {
                const x$10 = (e.stack && (!e.fileName));
                if ($uZ((!(!x$10)))) {
                  return $p_jl_StackTrace$__extractChrome__O__O($thiz, e)
                } else {
                  return $p_jl_StackTrace$__extractOther__O__O($thiz, e)
                }
              }
            }
          }
        }
      }
    }
  }
});
const $p_jl_StackTrace$__extractChrome__O__O = (function($thiz, e) {
  const x = ($as_T(e.stack) + "\n");
  const $$x6 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ");
  const x$1 = $as_T($$x6);
  const $$x5 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "");
  const x$2 = $as_T($$x5);
  const $$x4 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2");
  const x$3 = $as_T($$x4);
  const $$x3 = x$3.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)");
  const x$4 = $as_T($$x3);
  const $$x2 = x$4.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2");
  const x$5 = $as_T($$x2);
  const $$x1 = x$5.split("\n");
  return $$x1.slice(0, (-1))
});
const $p_jl_StackTrace$__extractFirefox__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x2 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("(?:\\n@:0)?\\s+$", "m"), "");
  const x$1 = $as_T($$x2);
  const $$x1 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@");
  const x$2 = $as_T($$x1);
  return x$2.split("\n")
});
const $p_jl_StackTrace$__extractIE__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2");
  const x$3 = $as_T($$x1);
  const qual$1 = x$3.split("\n");
  return qual$1.slice(1)
});
const $p_jl_StackTrace$__extractSafari__O__O = (function($thiz, e) {
  const x = $as_T(e.stack);
  const $$x3 = x.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("\\[native code\\]\\n", "m"), "");
  const x$1 = $as_T($$x3);
  const $$x2 = x$1.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "");
  const x$2 = $as_T($$x2);
  const $$x1 = x$2.replace($m_jl_StackTrace$StringRE$().re$extension__T__T__O("^@", "gm"), "{anonymous}()@");
  const x$3 = $as_T($$x1);
  return x$3.split("\n")
});
const $p_jl_StackTrace$__extractOpera9__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  const x = $as_T(e.message);
  const lines = x.split("\n");
  const result = [];
  let i = 2;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[2];
      const x$2 = mtch[1];
      const $$x1 = result.push(((("{anonymous}()@" + x$1) + ":") + x$2));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10a__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[3];
      const fnName = $as_T(((x$1 !== (void 0)) ? x$1 : "{anonymous}"));
      const x$2 = mtch[2];
      const x$3 = mtch[1];
      const $$x1 = result.push(((((fnName + "()@") + x$2) + ":") + x$3));
      $uI($$x1)
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera10b__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__O("^(.*)@(.+):(\\d+)$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[1];
      let $$x1;
      if ((x$1 !== (void 0))) {
        const arg1 = $as_T(x$1);
        $$x1 = $m_jl_StackTrace$().java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(arg1)
      } else {
        $$x1 = "global code"
      };
      const fnName = $as_T($$x1);
      const x$2 = mtch[2];
      const x$3 = mtch[3];
      const $$x2 = result.push(((((fnName + "@") + x$2) + ":") + x$3));
      $uI($$x2)
    };
    i = ((1 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOpera11__O__O = (function($thiz, e) {
  const lineRE = $m_jl_StackTrace$StringRE$().re$extension__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  const x = $as_T(e.stacktrace);
  const lines = x.split("\n");
  const result = [];
  let i = 0;
  const len = $uI(lines.length);
  while ((i < len)) {
    const mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      const x$1 = mtch[4];
      const $$x1 = $as_T(x$1);
      const x$2 = mtch[1];
      const x$3 = mtch[2];
      const location = (((($$x1 + ":") + x$2) + ":") + x$3);
      const x$4 = mtch[2];
      const fnName0 = $as_T(((x$4 !== (void 0)) ? x$4 : "global code"));
      const x$5 = $as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("<anonymous function: (\\S+)>"), "$1"));
      const $$x2 = x$5.replace($m_jl_StackTrace$StringRE$().re$extension__T__O("<anonymous function>"), "{anonymous}");
      const fnName = $as_T($$x2);
      $uI(result.push(((fnName + "@") + location)))
    };
    i = ((2 + i) | 0)
  };
  return result
});
const $p_jl_StackTrace$__extractOther__O__O = (function($thiz, e) {
  return []
});
const $p_jl_StackTrace$__loop$1__I__T__T = (function($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      const prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      if ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI(prefix.length))) === prefix))) {
        const dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        const $$x1 = $as_T(dict[prefix]);
        const beginIndex = $uI(prefix.length);
        return (("" + $$x1) + $as_T(encodedName$1.substring(beginIndex)))
      } else {
        i = ((1 + i) | 0)
      }
    } else {
      return ((($uI(encodedName$1.length) >= 0) && ($as_T(encodedName$1.substring(0, $uI("L".length))) === "L")) ? $as_T(encodedName$1.substring(1)) : encodedName$1)
    }
  }
});
class $c_jl_StackTrace$ extends $c_O {
  constructor() {
    super();
    this.jl_StackTrace$__f_decompressedClasses = null;
    this.jl_StackTrace$__f_decompressedPrefixes = null;
    this.jl_StackTrace$__f_compressedPrefixes = null;
    this.jl_StackTrace$__f_bitmap$0 = 0
  };
  java$lang$StackTrace$$$anonfun$extractOpera10b$1__T__T(x$1) {
    return (x$1 + "()")
  };
}
const $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
let $n_jl_StackTrace$ = (void 0);
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
class $c_jl_StackTrace$StringRE$ extends $c_O {
  re$extension__T__O(this$) {
    return new RegExp(this$)
  };
  re$extension__T__T__O(this$, mods) {
    return new RegExp(this$, mods)
  };
}
const $d_jl_StackTrace$StringRE$ = new $TypeData().initClass({
  jl_StackTrace$StringRE$: 0
}, false, "java.lang.StackTrace$StringRE$", {
  jl_StackTrace$StringRE$: 1,
  O: 1
});
$c_jl_StackTrace$StringRE$.prototype.$classData = $d_jl_StackTrace$StringRE$;
let $n_jl_StackTrace$StringRE$ = (void 0);
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$()
  };
  return $n_jl_StackTrace$StringRE$
}
class $c_jl_System$Streams$ extends $c_O {
  constructor() {
    super();
    this.jl_System$Streams$__f_out = null;
    this.jl_System$Streams$__f_err = null;
    this.jl_System$Streams$__f_in = null;
    $n_jl_System$Streams$ = this;
    this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
    this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    this.jl_System$Streams$__f_in = null
  };
}
const $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
let $n_jl_System$Streams$ = (void 0);
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Thread$ extends $c_O {
  constructor() {
    super();
    this.jl_Thread$__f_SingleThread = null;
    $n_jl_Thread$ = this;
    this.jl_Thread$__f_SingleThread = new $c_jl_Thread((void 0))
  };
}
const $d_jl_Thread$ = new $TypeData().initClass({
  jl_Thread$: 0
}, false, "java.lang.Thread$", {
  jl_Thread$: 1,
  O: 1
});
$c_jl_Thread$.prototype.$classData = $d_jl_Thread$;
let $n_jl_Thread$ = (void 0);
function $m_jl_Thread$() {
  if ((!$n_jl_Thread$)) {
    $n_jl_Thread$ = new $c_jl_Thread$()
  };
  return $n_jl_Thread$
}
class $c_jl_ThreadLocal extends $c_O {
  constructor() {
    super();
    this.jl_ThreadLocal__f_hasValue = false;
    this.jl_ThreadLocal__f_v = null;
    this.jl_ThreadLocal__f_hasValue = false
  };
  get__O() {
    if ((!this.jl_ThreadLocal__f_hasValue)) {
      this.set__O__V(null)
    };
    return this.jl_ThreadLocal__f_v
  };
  set__O__V(o) {
    this.jl_ThreadLocal__f_v = o;
    this.jl_ThreadLocal__f_hasValue = true
  };
}
const $d_jl_ThreadLocal = new $TypeData().initClass({
  jl_ThreadLocal: 0
}, false, "java.lang.ThreadLocal", {
  jl_ThreadLocal: 1,
  O: 1
});
$c_jl_ThreadLocal.prototype.$classData = $d_jl_ThreadLocal;
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = $asArrayOf_O(array, 1);
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = $asArrayOf_Z(array, 1);
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = $asArrayOf_C(array, 1);
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = $asArrayOf_B(array, 1);
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = $asArrayOf_S(array, 1);
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = $asArrayOf_I(array, 1);
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = $asArrayOf_J(array, 1);
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = $asArrayOf_F(array, 1);
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = $asArrayOf_D(array, 1);
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  equals__AJ__AJ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const t = a.get(i);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const t$1 = b.get(i);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AI__AI__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AS__AS__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AC__AC__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($bC(x), $bC(y)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AB__AB__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AZ__AZ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AD__AD__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AF__AF__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.get(i);
      const y = b.get(i);
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  fill__AO__I__I__O__V(a, fromIndex, toIndex, value) {
    if ((fromIndex > toIndex)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"))
    };
    if ((fromIndex < 0)) {
      a.get(fromIndex)
    };
    if ((toIndex > 0)) {
      a.get((((-1) + toIndex) | 0))
    };
    let i = fromIndex;
    while ((i !== toIndex)) {
      a.set(i, value);
      i = ((1 + i) | 0)
    }
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
class $c_Lorg_scalajs_dom_ext_Ajax$ extends $c_O {
  apply__T__T__Lorg_scalajs_dom_ext_Ajax$InputData__I__sci_Map__Z__T__s_concurrent_Future(method, url, data, timeout, headers, withCredentials, responseType) {
    const req = new XMLHttpRequest();
    const promise = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
    req.onreadystatechange = ((req$1, promise$1) => ((arg1$2) => $m_Lorg_scalajs_dom_ext_Ajax$().org$scalajs$dom$ext$Ajax$$$anonfun$apply$1__Lorg_scalajs_dom_raw_Event__Lorg_scalajs_dom_raw_XMLHttpRequest__s_concurrent_Promise__O(arg1$2, req$1, promise$1)))(req, promise);
    req.open(method, url);
    req.responseType = responseType;
    req.timeout = timeout;
    req.withCredentials = withCredentials;
    headers.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$2, req$2) => ((x$2) => {
      const x = $as_T2(x$2);
      req$2.setRequestHeader($as_T(x.T2__f__1), $as_T(x.T2__f__2))
    }))(this, req)));
    if ((data === null)) {
      req.send()
    } else {
      req.send(data)
    };
    return promise
  };
  org$scalajs$dom$ext$Ajax$$$anonfun$apply$1__Lorg_scalajs_dom_raw_Event__Lorg_scalajs_dom_raw_XMLHttpRequest__s_concurrent_Promise__O(e, req$1, promise$1) {
    if (($uI(req$1.readyState) === 4)) {
      if (((($uI(req$1.status) >= 200) && ($uI(req$1.status) < 300)) || ($uI(req$1.status) === 304))) {
        return $f_s_concurrent_Promise__success__O__s_concurrent_Promise(promise$1, req$1)
      } else {
        const cause = new $c_Lorg_scalajs_dom_ext_AjaxException(req$1);
        return $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(promise$1, cause)
      }
    } else {
      return (void 0)
    }
  };
}
const $d_Lorg_scalajs_dom_ext_Ajax$ = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_Ajax$: 0
}, false, "org.scalajs.dom.ext.Ajax$", {
  Lorg_scalajs_dom_ext_Ajax$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_ext_Ajax$.prototype.$classData = $d_Lorg_scalajs_dom_ext_Ajax$;
let $n_Lorg_scalajs_dom_ext_Ajax$ = (void 0);
function $m_Lorg_scalajs_dom_ext_Ajax$() {
  if ((!$n_Lorg_scalajs_dom_ext_Ajax$)) {
    $n_Lorg_scalajs_dom_ext_Ajax$ = new $c_Lorg_scalajs_dom_ext_Ajax$()
  };
  return $n_Lorg_scalajs_dom_ext_Ajax$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
class $c_s_Array$EmptyArrays$ extends $c_O {
  constructor() {
    super();
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = null;
    this.s_Array$EmptyArrays$__f_emptyByteArray = null;
    this.s_Array$EmptyArrays$__f_emptyCharArray = null;
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = null;
    this.s_Array$EmptyArrays$__f_emptyFloatArray = null;
    this.s_Array$EmptyArrays$__f_emptyIntArray = null;
    this.s_Array$EmptyArrays$__f_emptyLongArray = null;
    this.s_Array$EmptyArrays$__f_emptyShortArray = null;
    this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
    $n_s_Array$EmptyArrays$ = this;
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = $newArrayObject($d_Z.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyByteArray = $newArrayObject($d_B.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyCharArray = $newArrayObject($d_C.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = $newArrayObject($d_D.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyFloatArray = $newArrayObject($d_F.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyIntArray = $newArrayObject($d_I.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyLongArray = $newArrayObject($d_J.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyShortArray = $newArrayObject($d_S.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyObjectArray = $newArrayObject($d_O.getArrayOf(), [0])
  };
}
const $d_s_Array$EmptyArrays$ = new $TypeData().initClass({
  s_Array$EmptyArrays$: 0
}, false, "scala.Array$EmptyArrays$", {
  s_Array$EmptyArrays$: 1,
  O: 1
});
$c_s_Array$EmptyArrays$.prototype.$classData = $d_s_Array$EmptyArrays$;
let $n_s_Array$EmptyArrays$ = (void 0);
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$()
  };
  return $n_s_Array$EmptyArrays$
}
class $c_s_LowPriorityImplicits2 extends $c_O {
}
class $c_sc_ArrayOps$ extends $c_O {
  copyToArray$extension__O__O__I__I__I(this$, xs, start, len) {
    const srcLen = $m_sr_ScalaRunTime$().array_length__O__I(this$);
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied)
    };
    return copied
  };
}
const $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
let $n_sc_ArrayOps$ = (void 0);
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
class $c_sc_Hashing$ extends $c_O {
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
}
const $d_sc_Hashing$ = new $TypeData().initClass({
  sc_Hashing$: 0
}, false, "scala.collection.Hashing$", {
  sc_Hashing$: 1,
  O: 1
});
$c_sc_Hashing$.prototype.$classData = $d_sc_Hashing$;
let $n_sc_Hashing$ = (void 0);
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$()
  };
  return $n_sc_Hashing$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
const $f_sc_IterableOnceOps__foreach__F1__V = (function($thiz, f) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    f.apply__O__O(it.next__O())
  }
});
const $f_sc_IterableOnceOps__forall__F1__Z = (function($thiz, p) {
  let res = true;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while ((res && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__exists__F1__Z = (function($thiz, p) {
  let res = false;
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (((!res) && it.hasNext__Z())) {
    res = $uZ(p.apply__O__O(it.next__O()))
  };
  return res
});
const $f_sc_IterableOnceOps__isEmpty__Z = (function($thiz) {
  return (!$as_sc_IterableOnce($thiz).iterator__sc_Iterator().hasNext__Z())
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I = (function($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I__I = (function($thiz, xs, start, len) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
class $c_sc_Iterator$ConcatIteratorCell extends $c_O {
  constructor(head, tail) {
    super();
    this.sc_Iterator$ConcatIteratorCell__f_head = null;
    this.sc_Iterator$ConcatIteratorCell__f_tail = null;
    this.sc_Iterator$ConcatIteratorCell__f_head = head;
    this.sc_Iterator$ConcatIteratorCell__f_tail = tail
  };
  headIterator__sc_Iterator() {
    return $as_sc_IterableOnce(this.sc_Iterator$ConcatIteratorCell__f_head.apply__O()).iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass({
  sc_Iterator$ConcatIteratorCell: 0
}, false, "scala.collection.Iterator$ConcatIteratorCell", {
  sc_Iterator$ConcatIteratorCell: 1,
  O: 1
});
$c_sc_Iterator$ConcatIteratorCell.prototype.$classData = $d_sc_Iterator$ConcatIteratorCell;
const $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps = (function($thiz) {
  if ((!$thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0)) {
    $thiz.sc_LinearSeqIterator$LazyCell__f_v = $as_sc_LinearSeqOps($thiz.sc_LinearSeqIterator$LazyCell__f_st.apply__O());
    $thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sc_LinearSeqIterator$LazyCell__f_st = null;
  return $thiz.sc_LinearSeqIterator$LazyCell__f_v
});
class $c_sc_LinearSeqIterator$LazyCell extends $c_O {
  constructor(outer, st) {
    super();
    this.sc_LinearSeqIterator$LazyCell__f_v = null;
    this.sc_LinearSeqIterator$LazyCell__f_st = null;
    this.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = false;
    this.sc_LinearSeqIterator$LazyCell__f_st = st
  };
  v__sc_LinearSeqOps() {
    return ((!this.sc_LinearSeqIterator$LazyCell__f_bitmap$0) ? $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps(this) : this.sc_LinearSeqIterator$LazyCell__f_v)
  };
}
const $d_sc_LinearSeqIterator$LazyCell = new $TypeData().initClass({
  sc_LinearSeqIterator$LazyCell: 0
}, false, "scala.collection.LinearSeqIterator$LazyCell", {
  sc_LinearSeqIterator$LazyCell: 1,
  O: 1
});
$c_sc_LinearSeqIterator$LazyCell.prototype.$classData = $d_sc_LinearSeqIterator$LazyCell;
class $c_sc_StringOps$ extends $c_O {
  slice$extension__T__I__I__T(this$, from, until) {
    const start = ((from > 0) ? from : 0);
    const that = $uI(this$.length);
    const end = ((until < that) ? until : that);
    return ((start >= end) ? "" : $as_T(this$.substring(start, end)))
  };
  stripMargin$extension__T__C__T(this$, marginChar) {
    const sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), $uI(this$.length));
    const this$3 = new $c_sc_StringOps$$anon$1(this$, false);
    while ((this$3.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this$3.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      const arg1 = this$3.next__T();
      const len = $uI(arg1.length);
      let index = 0;
      while (true) {
        let $$x1;
        if ((index < len)) {
          const index$1 = index;
          $$x1 = ((65535 & $uI(arg1.charCodeAt(index$1))) <= 32)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          index = ((1 + index) | 0)
        } else {
          break
        }
      };
      let $$x2;
      if ((index < len)) {
        const index$2 = index;
        $$x2 = ((65535 & $uI(arg1.charCodeAt(index$2))) === marginChar)
      } else {
        $$x2 = false
      };
      let stripped;
      if ($$x2) {
        const beginIndex = ((1 + index) | 0);
        stripped = $as_T(arg1.substring(beginIndex))
      } else {
        stripped = arg1
      };
      sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + stripped)
    };
    return sb.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  drop$extension__T__I__T(this$, n) {
    const $$x1 = $m_sc_StringOps$();
    const y = $uI(this$.length);
    return $$x1.slice$extension__T__I__I__T(this$, ((n < y) ? n : y), $uI(this$.length))
  };
  takeRight$extension__T__I__T(this$, n) {
    return $m_sc_StringOps$().drop$extension__T__I__T(this$, (($uI(this$.length) - ((n > 0) ? n : 0)) | 0))
  };
}
const $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
let $n_sc_StringOps$ = (void 0);
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
const $p_sci_ChampBaseIterator__initNodes__V = (function($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = $newArrayObject($d_I.getArrayOf(), [($m_sci_Node$().sci_Node$__f_MaxDepth << 1)]);
    $thiz.sci_ChampBaseIterator__f_nodes = $newArrayObject($d_sci_Node.getArrayOf(), [$m_sci_Node$().sci_Node$__f_MaxDepth])
  }
});
const $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = node.payloadArity__I()
});
const $p_sci_ChampBaseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $thiz.sci_ChampBaseIterator__f_nodes.set($thiz.sci_ChampBaseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(cursorIndex, 0);
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.set(lengthIndex, node.nodeArity__I())
});
const $p_sci_ChampBaseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    const nodeCursor = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(cursorIndex);
    const nodeLength = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.get(lengthIndex);
    if ((nodeCursor < nodeLength)) {
      const ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      ev$1.set(cursorIndex, ((1 + ev$1.get(cursorIndex)) | 0));
      const nextNode = $thiz.sci_ChampBaseIterator__f_nodes.get($thiz.sci_ChampBaseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      if (nextNode.hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode)
      };
      if (nextNode.hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz)
    }
  };
  return false
});
const $ct_sci_ChampBaseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz
});
const $ct_sci_ChampBaseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode)
  };
  if (rootNode.hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode)
  };
  return $thiz
});
class $c_sci_ChampBaseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseIterator__f_currentValueLength = 0;
    this.sci_ChampBaseIterator__f_currentValueNode = null;
    this.sci_ChampBaseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
    this.sci_ChampBaseIterator__f_nodes = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + node.payloadArity__I()) | 0)
});
const $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, node);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + node.nodeArity__I()) | 0))
});
const $p_sci_ChampBaseReverseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
    const nodeCursor = $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
    $thiz.sci_ChampBaseReverseIterator__f_nodeIndex.set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + nodeCursor) | 0));
    if ((nodeCursor >= 0)) {
      const nextNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel).getNode__I__sci_Node(nodeCursor);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode)
    } else {
      const currNode = $thiz.sci_ChampBaseReverseIterator__f_nodeStack.get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hasPayload__Z()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true
      }
    }
  };
  return false
});
const $ct_sci_ChampBaseReverseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = $newArrayObject($d_I.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack = $newArrayObject($d_sci_Node.getArrayOf(), [((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0)]);
  return $thiz
});
const $ct_sci_ChampBaseReverseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz
});
class $c_sci_ChampBaseReverseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
    this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
    this.sci_ChampBaseReverseIterator__f_nodeStack = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
class $c_sci_LazyList$LazyBuilder$DeferredState extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
  };
  eval__sci_LazyList$State() {
    const state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
    if ((state === null)) {
      throw new $c_jl_IllegalStateException("uninitialized")
    };
    return $as_sci_LazyList$State(state.apply__O())
  };
  init__F0__V(state) {
    if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
      throw new $c_jl_IllegalStateException("already initialized")
    };
    this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
  };
}
const $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
class $c_sci_MapKeyValueTupleHashIterator$$anon$1 extends $c_O {
  constructor(outer) {
    super();
    this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer = outer
    }
  };
  hashCode__I() {
    return this.sci_MapKeyValueTupleHashIterator$$anon$1__f_$outer.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash
  };
}
const $d_sci_MapKeyValueTupleHashIterator$$anon$1 = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator$$anon$1: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator$$anon$1", {
  sci_MapKeyValueTupleHashIterator$$anon$1: 1,
  O: 1
});
$c_sci_MapKeyValueTupleHashIterator$$anon$1.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator$$anon$1;
class $c_sci_MapNode$ extends $c_O {
  constructor() {
    super();
    this.sci_MapNode$__f_EmptyMapNode = null;
    $n_sci_MapNode$ = this;
    this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_MapNode$ = new $TypeData().initClass({
  sci_MapNode$: 0
}, false, "scala.collection.immutable.MapNode$", {
  sci_MapNode$: 1,
  O: 1
});
$c_sci_MapNode$.prototype.$classData = $d_sci_MapNode$;
let $n_sci_MapNode$ = (void 0);
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$()
  };
  return $n_sci_MapNode$
}
const $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException = (function($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(as)) | 0)))
});
class $c_sci_Node extends $c_O {
  removeElement__AI__I__AI(as, ix) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > (((-1) + as.u.length) | 0))) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [(((-1) + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    const srcPos = ((1 + ix) | 0);
    const length = (((-1) + ((as.u.length - ix) | 0)) | 0);
    $systemArraycopy(as, srcPos, result, ix, length);
    return result
  };
  insertElement__AI__I__I__AI(as, ix, elem) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > as.u.length)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    result.set(ix, elem);
    const destPos = ((1 + ix) | 0);
    const length = ((as.u.length - ix) | 0);
    $systemArraycopy(as, ix, result, destPos, length);
    return result
  };
}
const $d_sci_Node = new $TypeData().initClass({
  sci_Node: 0
}, false, "scala.collection.immutable.Node", {
  sci_Node: 1,
  O: 1
});
$c_sci_Node.prototype.$classData = $d_sci_Node;
class $c_sci_Node$ extends $c_O {
  constructor() {
    super();
    this.sci_Node$__f_MaxDepth = 0;
    $n_sci_Node$ = this;
    this.sci_Node$__f_MaxDepth = $doubleToInt($uD(Math.ceil(6.4)))
  };
  maskFrom__I__I__I(hash, shift) {
    return (31 & ((hash >>> shift) | 0))
  };
  bitposFrom__I__I(mask) {
    return (1 << mask)
  };
  indexFrom__I__I__I(bitmap, bitpos) {
    const i = (bitmap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  indexFrom__I__I__I__I(bitmap, mask, bitpos) {
    return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos))
  };
}
const $d_sci_Node$ = new $TypeData().initClass({
  sci_Node$: 0
}, false, "scala.collection.immutable.Node$", {
  sci_Node$: 1,
  O: 1
});
$c_sci_Node$.prototype.$classData = $d_sci_Node$;
let $n_sci_Node$ = (void 0);
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$()
  };
  return $n_sci_Node$
}
class $c_sci_SetNode$ extends $c_O {
  constructor() {
    super();
    this.sci_SetNode$__f_EmptySetNode = null;
    $n_sci_SetNode$ = this;
    this.sci_SetNode$__f_EmptySetNode = new $c_sci_BitmapIndexedSetNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_SetNode$ = new $TypeData().initClass({
  sci_SetNode$: 0
}, false, "scala.collection.immutable.SetNode$", {
  sci_SetNode$: 1,
  O: 1
});
$c_sci_SetNode$.prototype.$classData = $d_sci_SetNode$;
let $n_sci_SetNode$ = (void 0);
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$()
  };
  return $n_sci_SetNode$
}
const $f_sci_VectorPointer__preClean__I__V = (function($thiz, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case 0: {
      $thiz.display1_$eq__AAO__V(null);
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 1: {
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 2: {
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 3: {
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 4: {
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 5: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V = (function($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V(that.display5__AAAAAAO());
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPos__I__I__V = (function($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoNextBlockStart__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get(0));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoNewBlockStart__I__I__V = (function($thiz, index, depth) {
  if ((depth > 5)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))))
  };
  if ((depth > 4)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))))
  };
  if ((depth > 3)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))))
  };
  if ((depth > 2)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))))
  };
  if ((depth > 1)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  }
});
const $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
      $thiz.display1__AAO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display2__AAAO().set(0, $thiz.display1__AAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display3__AAAAO().set(0, $thiz.display2__AAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display4__AAAAAO().set(0, $thiz.display3__AAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display5__AAAAAAO().set(0, $thiz.display4__AAAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO = (function($thiz, array, index) {
  const x = array.get(index);
  array.set(index, null);
  return $asArrayOf_O(x.clone__O(), 1)
});
const $f_sci_VectorPointer__stabilize__I__V = (function($thiz, index) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO());
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable0__I__I__V = (function($thiz, newIndex, xor) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      const array = $thiz.display5__AAAAAAO();
      const index = (31 & ((newIndex >>> 25) | 0));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index), 5));
      const array$1 = $thiz.display4__AAAAAO();
      const index$1 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 4));
      const array$2 = $thiz.display3__AAAAO();
      const index$2 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2), 3));
      const array$3 = $thiz.display2__AAAO();
      const index$3 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 2));
      const array$4 = $thiz.display1__AAO();
      const index$4 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4));
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      const array$5 = $thiz.display4__AAAAAO();
      const index$5 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5), 4));
      const array$6 = $thiz.display3__AAAAO();
      const index$6 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 3));
      const array$7 = $thiz.display2__AAAO();
      const index$7 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 2));
      const array$8 = $thiz.display1__AAO();
      const index$8 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8));
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      const array$9 = $thiz.display3__AAAAO();
      const index$9 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9), 3));
      const array$10 = $thiz.display2__AAAO();
      const index$10 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 2));
      const array$11 = $thiz.display1__AAO();
      const index$11 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11));
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      const array$12 = $thiz.display2__AAAO();
      const index$12 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 2));
      const array$13 = $thiz.display1__AAO();
      const index$13 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13));
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      const array$14 = $thiz.display1__AAO();
      const index$14 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14));
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1));
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1))
  } else if ((xor < 1024)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    const array = $thiz.display1__AAO();
    const index = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    const array$1 = $thiz.display2__AAAO();
    const index$1 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 2));
    const array$2 = $thiz.display1__AAO();
    const index$2 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2))
  } else if ((xor < 1048576)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    const array$3 = $thiz.display3__AAAAO();
    const index$3 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 3));
    const array$4 = $thiz.display2__AAAO();
    const index$4 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4), 2));
    const array$5 = $thiz.display1__AAO();
    const index$5 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5))
  } else if ((xor < 33554432)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    const array$6 = $thiz.display4__AAAAAO();
    const index$6 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 4));
    const array$7 = $thiz.display3__AAAAO();
    const index$7 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 3));
    const array$8 = $thiz.display2__AAAO();
    const index$8 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8), 2));
    const array$9 = $thiz.display1__AAO();
    const index$9 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9))
  } else if ((xor < 1073741824)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AAAAAO());
    const array$10 = $thiz.display5__AAAAAAO();
    const index$10 = (31 & ((newIndex >>> 25) | 0));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 5));
    const array$11 = $thiz.display4__AAAAAO();
    const index$11 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11), 4));
    const array$12 = $thiz.display3__AAAAO();
    const index$12 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 3));
    const array$13 = $thiz.display2__AAAO();
    const index$13 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13), 2));
    const array$14 = $thiz.display1__AAO();
    const index$14 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__copyRange__AO__I__I__AO = (function($thiz, array, oldLeft, newLeft) {
  const componentType = $objectGetClass(array).getComponentType__jl_Class();
  const elems = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, 32), 1);
  const length = ((32 - ((newLeft > oldLeft) ? newLeft : oldLeft)) | 0);
  $systemArraycopy(array, oldLeft, elems, newLeft, length);
  return elems
});
const $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      if (($thiz.depth__I() === 1)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
        $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 32768)) {
      if (($thiz.depth__I() === 2)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1048576)) {
      if (($thiz.depth__I() === 3)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 33554432)) {
      if (($thiz.depth__I() === 4)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((newIndex >>> 20) | 0))));
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1073741824)) {
      if (($thiz.depth__I() === 5)) {
        $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display5__AAAAAAO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AAAAAO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((newIndex >>> 25) | 0))));
      if (($thiz.display4__AAAAAO() === null)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((newIndex >>> 20) | 0))));
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((newIndex >>> 15) | 0))));
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((newIndex >>> 10) | 0))));
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  $f_sci_VectorPointer__stabilize__I__V($thiz, oldIndex);
  $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor)
});
class $c_scm_HashMap$Node {
}
function $as_scm_HashMap$Node(obj) {
  return (((obj instanceof $c_scm_HashMap$Node) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap$Node"))
}
function $isArrayOf_scm_HashMap$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap$Node)))
}
function $asArrayOf_scm_HashMap$Node(obj, depth) {
  return (($isArrayOf_scm_HashMap$Node(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$Node;", depth))
}
class $c_sc_package$$colon$plus$ extends $c_O {
}
const $d_sc_package$$colon$plus$ = new $TypeData().initClass({
  sc_package$$colon$plus$: 0
}, false, "scala.collection.package$$colon$plus$", {
  sc_package$$colon$plus$: 1,
  O: 1
});
$c_sc_package$$colon$plus$.prototype.$classData = $d_sc_package$$colon$plus$;
let $n_sc_package$$colon$plus$ = (void 0);
function $m_sc_package$$colon$plus$() {
  if ((!$n_sc_package$$colon$plus$)) {
    $n_sc_package$$colon$plus$ = new $c_sc_package$$colon$plus$()
  };
  return $n_sc_package$$colon$plus$
}
class $c_sc_package$$plus$colon$ extends $c_O {
}
const $d_sc_package$$plus$colon$ = new $TypeData().initClass({
  sc_package$$plus$colon$: 0
}, false, "scala.collection.package$$plus$colon$", {
  sc_package$$plus$colon$: 1,
  O: 1
});
$c_sc_package$$plus$colon$.prototype.$classData = $d_sc_package$$plus$colon$;
let $n_sc_package$$plus$colon$ = (void 0);
function $m_sc_package$$plus$colon$() {
  if ((!$n_sc_package$$plus$colon$)) {
    $n_sc_package$$plus$colon$ = new $c_sc_package$$plus$colon$()
  };
  return $n_sc_package$$plus$colon$
}
const $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable = (function($thiz, curSize) {
  const curOther = $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
  const curLen = curOther.u.length;
  if ((curSize <= curLen)) {
    return curOther
  } else {
    const newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen))
    };
    const newOther = $newArrayObject($d_jl_Runnable.getArrayOf(), [newLen]);
    $systemArraycopy(curOther, 0, newOther, 0, curLen);
    $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = newOther;
    return newOther
  }
});
const $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__ = (function($thiz, outer, first, other, size) {
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_first = first;
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = other;
  $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_size = size;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = outer
  };
  return $thiz
});
class $c_s_concurrent_BatchingExecutor$AbstractBatch extends $c_O {
  constructor() {
    super();
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_other = null;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = null
  };
  push__jl_Runnable__V(r) {
    const sz = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
    if ((sz === 0)) {
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = r
    } else {
      $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).set((((-1) + sz) | 0), r)
    };
    this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = ((1 + sz) | 0)
  };
  runN__I__V(n) {
    while (true) {
      if ((n > 0)) {
        const x1 = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
        switch (x1) {
          case 0: {
            break
          }
          case 1: {
            const next = this.s_concurrent_BatchingExecutor$AbstractBatch__f_first;
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
            next.run__V();
            n = (((-1) + n) | 0);
            continue;
            break
          }
          default: {
            const o = this.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
            const next$2 = o.get((((-2) + x1) | 0));
            o.set((((-2) + x1) | 0), null);
            this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = (((-1) + x1) | 0);
            next$2.run__V();
            n = (((-1) + n) | 0);
            continue
          }
        }
      };
      break
    }
  };
}
class $c_s_concurrent_BatchingExecutorStatics$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = null;
    $n_s_concurrent_BatchingExecutorStatics$ = this;
    this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = $newArrayObject($d_jl_Runnable.getArrayOf(), [0])
  };
}
const $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().initClass({
  s_concurrent_BatchingExecutorStatics$: 0
}, false, "scala.concurrent.BatchingExecutorStatics$", {
  s_concurrent_BatchingExecutorStatics$: 1,
  O: 1
});
$c_s_concurrent_BatchingExecutorStatics$.prototype.$classData = $d_s_concurrent_BatchingExecutorStatics$;
let $n_s_concurrent_BatchingExecutorStatics$ = (void 0);
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$()
  };
  return $n_s_concurrent_BatchingExecutorStatics$
}
class $c_s_concurrent_ExecutionContext$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_ExecutionContext$__f_global = null;
    this.s_concurrent_ExecutionContext$__f_defaultReporter = null;
    this.s_concurrent_ExecutionContext$__f_bitmap$0 = false;
    $n_s_concurrent_ExecutionContext$ = this;
    this.s_concurrent_ExecutionContext$__f_defaultReporter = new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
      const x$1 = $as_jl_Throwable(x$1$2);
      x$1.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
    }))(this))
  };
}
const $d_s_concurrent_ExecutionContext$ = new $TypeData().initClass({
  s_concurrent_ExecutionContext$: 0
}, false, "scala.concurrent.ExecutionContext$", {
  s_concurrent_ExecutionContext$: 1,
  O: 1
});
$c_s_concurrent_ExecutionContext$.prototype.$classData = $d_s_concurrent_ExecutionContext$;
let $n_s_concurrent_ExecutionContext$ = (void 0);
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$()
  };
  return $n_s_concurrent_ExecutionContext$
}
class $c_s_concurrent_Future$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_Future$__f_toBoxed = null;
    this.s_concurrent_Future$__f__cachedId = null;
    this.s_concurrent_Future$__f_collectFailed = null;
    this.s_concurrent_Future$__f_filterFailure = null;
    this.s_concurrent_Future$__f_failedFailure = null;
    this.s_concurrent_Future$__f_failedFailureFuture = null;
    this.s_concurrent_Future$__f__failedFun = null;
    this.s_concurrent_Future$__f_recoverWithFailedMarker = null;
    this.s_concurrent_Future$__f_recoverWithFailed = null;
    this.s_concurrent_Future$__f__zipWithTuple2 = null;
    this.s_concurrent_Future$__f__addToBuilderFun = null;
    this.s_concurrent_Future$__f_unit = null;
    $n_s_concurrent_Future$ = this;
    const this$22 = $m_s_Predef$().s_Predef$__f_Map;
    const array = [new $c_T2($d_Z.getClassOf(), $d_jl_Boolean.getClassOf()), new $c_T2($d_B.getClassOf(), $d_jl_Byte.getClassOf()), new $c_T2($d_C.getClassOf(), $d_jl_Character.getClassOf()), new $c_T2($d_S.getClassOf(), $d_jl_Short.getClassOf()), new $c_T2($d_I.getClassOf(), $d_jl_Integer.getClassOf()), new $c_T2($d_J.getClassOf(), $d_jl_Long.getClassOf()), new $c_T2($d_F.getClassOf(), $d_jl_Float.getClassOf()), new $c_T2($d_D.getClassOf(), $d_jl_Double.getClassOf()), new $c_T2($d_V.getClassOf(), $d_jl_Void.getClassOf())];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    this.s_concurrent_Future$__f_toBoxed = this$22.from__sc_IterableOnce__sci_Map(elems);
    this.s_concurrent_Future$__f__cachedId = new $c_sjsr_AnonFunction1(((this$23) => ((x$2) => x$2))(this));
    this.s_concurrent_Future$__f_collectFailed = new $c_sjsr_AnonFunction1(((this$2$1) => ((t$2) => {
      throw new $c_s_concurrent_Future$$anon$1(t$2)
    }))(this));
    this.s_concurrent_Future$__f_filterFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
    this.s_concurrent_Future$__f_failedFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
    this.s_concurrent_Future$__f_failedFailureFuture = $m_s_concurrent_Future$().fromTry__s_util_Try__s_concurrent_Future(this.s_concurrent_Future$__f_failedFailure);
    this.s_concurrent_Future$__f__failedFun = new $c_sjsr_AnonFunction1(((this$3$1) => ((v$2) => {
      const v = $as_s_util_Try(v$2);
      return ((v instanceof $c_s_util_Failure) ? new $c_s_util_Success($as_s_util_Failure(v).s_util_Failure__f_exception) : $m_s_concurrent_Future$().s_concurrent_Future$__f_failedFailure)
    }))(this));
    this.s_concurrent_Future$__f_recoverWithFailedMarker = $m_s_concurrent_Future$().failed__jl_Throwable__s_concurrent_Future(new $c_s_concurrent_Future$$anon$4());
    this.s_concurrent_Future$__f_recoverWithFailed = new $c_sjsr_AnonFunction1(((this$4$1) => ((t$3$2) => {
      $as_jl_Throwable(t$3$2);
      return $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker
    }))(this));
    this.s_concurrent_Future$__f__zipWithTuple2 = new $c_sjsr_AnonFunction2(((this$5$1) => ((_1$2, _2$2) => new $c_T2(_1$2, _2$2)))(this));
    this.s_concurrent_Future$__f__addToBuilderFun = new $c_sjsr_AnonFunction2(((this$6$1) => ((b$2, e$2) => {
      const b = $as_scm_Builder(b$2);
      return $as_scm_Builder(b.addOne__O__scm_Growable(e$2))
    }))(this));
    this.s_concurrent_Future$__f_unit = this.fromTry__s_util_Try__s_concurrent_Future(new $c_s_util_Success((void 0)))
  };
  failed__jl_Throwable__s_concurrent_Future(exception) {
    return $m_s_concurrent_Promise$().failed__jl_Throwable__s_concurrent_Promise(exception)
  };
  fromTry__s_util_Try__s_concurrent_Future(result) {
    return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result)
  };
}
const $d_s_concurrent_Future$ = new $TypeData().initClass({
  s_concurrent_Future$: 0
}, false, "scala.concurrent.Future$", {
  s_concurrent_Future$: 1,
  O: 1
});
$c_s_concurrent_Future$.prototype.$classData = $d_s_concurrent_Future$;
let $n_s_concurrent_Future$ = (void 0);
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$()
  };
  return $n_s_concurrent_Future$
}
const $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise = (function($thiz, result) {
  if ($thiz.tryComplete__s_util_Try__Z(result)) {
    return $thiz
  } else {
    throw new $c_jl_IllegalStateException("Promise already completed.")
  }
});
const $f_s_concurrent_Promise__success__O__s_concurrent_Promise = (function($thiz, value) {
  const result = new $c_s_util_Success(value);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
const $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise = (function($thiz, cause) {
  const result = new $c_s_util_Failure(cause);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
});
class $c_s_concurrent_Promise$ extends $c_O {
  failed__jl_Throwable__s_concurrent_Promise(exception) {
    const result = new $c_s_util_Failure(exception);
    return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result)
  };
}
const $d_s_concurrent_Promise$ = new $TypeData().initClass({
  s_concurrent_Promise$: 0
}, false, "scala.concurrent.Promise$", {
  s_concurrent_Promise$: 1,
  O: 1
});
$c_s_concurrent_Promise$.prototype.$classData = $d_s_concurrent_Promise$;
let $n_s_concurrent_Promise$ = (void 0);
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$()
  };
  return $n_s_concurrent_Promise$
}
class $c_s_concurrent_impl_Promise$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = null;
    $n_s_concurrent_impl_Promise$ = this;
    this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$())
  };
  scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(value) {
    if ((value === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    };
    if ((value instanceof $c_s_util_Success)) {
      return value
    } else {
      const t = $as_s_util_Failure(value).s_util_Failure__f_exception;
      return ((((t instanceof $c_s_util_control_ControlThrowable) || (t instanceof $c_jl_InterruptedException)) || (t instanceof $c_jl_Error)) ? ((t instanceof $c_sr_NonLocalReturnControl) ? new $c_s_util_Success($as_sr_NonLocalReturnControl(t).value__O()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value)
    }
  };
}
const $d_s_concurrent_impl_Promise$ = new $TypeData().initClass({
  s_concurrent_impl_Promise$: 0
}, false, "scala.concurrent.impl.Promise$", {
  s_concurrent_impl_Promise$: 1,
  O: 1
});
$c_s_concurrent_impl_Promise$.prototype.$classData = $d_s_concurrent_impl_Promise$;
let $n_s_concurrent_impl_Promise$ = (void 0);
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$()
  };
  return $n_s_concurrent_impl_Promise$
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_impl_Promise$Callbacks)))
}
function $as_s_concurrent_impl_Promise$Callbacks(obj) {
  return (($is_s_concurrent_impl_Promise$Callbacks(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Callbacks"))
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Callbacks)))
}
function $asArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Callbacks;", depth))
}
const $ct_s_math_Numeric$NumericOps__s_math_Numeric__O__ = (function($thiz, outer, lhs) {
  $thiz.s_math_Numeric$NumericOps__f_lhs = lhs;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.s_math_Numeric$NumericOps__f_$outer = outer
  };
  return $thiz
});
class $c_s_math_Numeric$NumericOps extends $c_O {
  constructor() {
    super();
    this.s_math_Numeric$NumericOps__f_lhs = null;
    this.s_math_Numeric$NumericOps__f_$outer = null
  };
  $plus__O__O(rhs) {
    return this.s_math_Numeric$NumericOps__f_$outer.plus__O__O__O(this.s_math_Numeric$NumericOps__f_lhs, rhs)
  };
  $minus__O__O(rhs) {
    return this.s_math_Numeric$NumericOps__f_$outer.minus__O__O__O(this.s_math_Numeric$NumericOps__f_lhs, rhs)
  };
  $times__O__O(rhs) {
    return this.s_math_Numeric$NumericOps__f_$outer.times__O__O__O(this.s_math_Numeric$NumericOps__f_lhs, rhs)
  };
}
class $c_s_math_Ordered$ extends $c_O {
}
const $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
let $n_s_math_Ordered$ = (void 0);
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
class $c_s_math_package$ extends $c_O {
  signum__J__J(x) {
    const lo = x.RTLong__f_hi;
    const value = ((lo < 0) ? (-1) : (((lo === 0) && (x.RTLong__f_lo === 0)) ? 0 : 1));
    const hi = (value >> 31);
    return new $c_RTLong(value, hi)
  };
}
const $d_s_math_package$ = new $TypeData().initClass({
  s_math_package$: 0
}, false, "scala.math.package$", {
  s_math_package$: 1,
  O: 1
});
$c_s_math_package$.prototype.$classData = $d_s_math_package$;
let $n_s_math_package$ = (void 0);
function $m_s_math_package$() {
  if ((!$n_s_math_package$)) {
    $n_s_math_package$ = new $c_s_math_package$()
  };
  return $n_s_math_package$
}
class $c_s_package$ extends $c_O {
  constructor() {
    super();
    this.s_package$__f_BigDecimal = null;
    this.s_package$__f_BigInt = null;
    this.s_package$__f_AnyRef = null;
    this.s_package$__f_Traversable = null;
    this.s_package$__f_Iterable = null;
    this.s_package$__f_Seq = null;
    this.s_package$__f_IndexedSeq = null;
    this.s_package$__f_Iterator = null;
    this.s_package$__f_List = null;
    this.s_package$__f_Nil = null;
    this.s_package$__f_$colon$colon = null;
    this.s_package$__f_$plus$colon = null;
    this.s_package$__f_$colon$plus = null;
    this.s_package$__f_Stream = null;
    this.s_package$__f_LazyList = null;
    this.s_package$__f_Vector = null;
    this.s_package$__f_StringBuilder = null;
    this.s_package$__f_Range = null;
    this.s_package$__f_Equiv = null;
    this.s_package$__f_Fractional = null;
    this.s_package$__f_Integral = null;
    this.s_package$__f_Numeric = null;
    this.s_package$__f_Ordered = null;
    this.s_package$__f_Ordering = null;
    this.s_package$__f_Either = null;
    this.s_package$__f_Left = null;
    this.s_package$__f_Right = null;
    this.s_package$__f_bitmap$0 = 0;
    $n_s_package$ = this;
    this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
    this.s_package$__f_Traversable = $m_sc_Iterable$();
    this.s_package$__f_Iterable = $m_sc_Iterable$();
    this.s_package$__f_Seq = $m_sci_Seq$();
    this.s_package$__f_IndexedSeq = $m_sci_IndexedSeq$();
    this.s_package$__f_Iterator = $m_sc_Iterator$();
    this.s_package$__f_List = $m_sci_List$();
    this.s_package$__f_Nil = $m_sci_Nil$();
    this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
    this.s_package$__f_$plus$colon = $m_sc_package$$plus$colon$();
    this.s_package$__f_$colon$plus = $m_sc_package$$colon$plus$();
    this.s_package$__f_Stream = $m_sci_Stream$();
    this.s_package$__f_LazyList = $m_sci_LazyList$();
    this.s_package$__f_Vector = $m_sci_Vector$();
    this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
    this.s_package$__f_Range = $m_sci_Range$();
    this.s_package$__f_Equiv = $m_s_math_Equiv$();
    this.s_package$__f_Fractional = $m_s_math_Fractional$();
    this.s_package$__f_Integral = $m_s_math_Integral$();
    this.s_package$__f_Numeric = $m_s_math_Numeric$();
    this.s_package$__f_Ordered = $m_s_math_Ordered$();
    this.s_package$__f_Ordering = $m_s_math_Ordering$();
    this.s_package$__f_Either = $m_s_util_Either$();
    this.s_package$__f_Left = $m_s_util_Left$();
    this.s_package$__f_Right = $m_s_util_Right$()
  };
}
const $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
let $n_s_package$ = (void 0);
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__I__I((hash ^ length))
  };
  avalanche__I__I(h0) {
    let h = h0;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
class $c_sjs_concurrent_JSExecutionContext$ extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_JSExecutionContext$__f_queue = null;
    $n_sjs_concurrent_JSExecutionContext$ = this;
    this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor()
  };
}
const $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_JSExecutionContext$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$", {
  sjs_concurrent_JSExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$;
let $n_sjs_concurrent_JSExecutionContext$ = (void 0);
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$()
  };
  return $n_sjs_concurrent_JSExecutionContext$
}
class $c_sjs_concurrent_JSExecutionContext$Implicits$ extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = null;
    $n_sjs_concurrent_JSExecutionContext$Implicits$ = this;
    this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue
  };
}
const $d_sjs_concurrent_JSExecutionContext$Implicits$ = new $TypeData().initClass({
  sjs_concurrent_JSExecutionContext$Implicits$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$Implicits$", {
  sjs_concurrent_JSExecutionContext$Implicits$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$Implicits$;
let $n_sjs_concurrent_JSExecutionContext$Implicits$ = (void 0);
function $m_sjs_concurrent_JSExecutionContext$Implicits$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$Implicits$)) {
    $n_sjs_concurrent_JSExecutionContext$Implicits$ = new $c_sjs_concurrent_JSExecutionContext$Implicits$()
  };
  return $n_sjs_concurrent_JSExecutionContext$Implicits$
}
class $c_sjs_concurrent_QueueExecutionContext$ extends $c_O {
  apply__s_concurrent_ExecutionContextExecutor() {
    return (($as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext())
  };
}
const $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$", {
  sjs_concurrent_QueueExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_QueueExecutionContext$.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$;
let $n_sjs_concurrent_QueueExecutionContext$ = (void 0);
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$()
  };
  return $n_sjs_concurrent_QueueExecutionContext$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
const $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable = (function($thiz) {
  const this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz)
  } else {
    return $as_jl_Throwable($thiz)
  }
});
class $c_s_util_control_NonFatal$ extends $c_O {
  apply__jl_Throwable__Z(t) {
    return (!((t instanceof $c_jl_VirtualMachineError) || ((t instanceof $c_jl_ThreadDeath) || ((t instanceof $c_jl_InterruptedException) || ((t instanceof $c_jl_LinkageError) || (t instanceof $c_s_util_control_ControlThrowable))))))
  };
  unapply__jl_Throwable__s_Option(t) {
    return (this.apply__jl_Throwable__Z(t) ? new $c_s_Some(t) : $m_s_None$())
  };
}
const $d_s_util_control_NonFatal$ = new $TypeData().initClass({
  s_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", {
  s_util_control_NonFatal$: 1,
  O: 1
});
$c_s_util_control_NonFatal$.prototype.$classData = $d_s_util_control_NonFatal$;
let $n_s_util_control_NonFatal$ = (void 0);
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$()
  };
  return $n_s_util_control_NonFatal$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_IterableOnce__I__I(xs, seed) {
    let elem = 0;
    elem = 0;
    let elem$1 = 0;
    elem$1 = 0;
    let elem$2 = 0;
    elem$2 = 0;
    let elem$3 = 0;
    elem$3 = 1;
    const this$5 = xs.iterator__sc_Iterator();
    while (this$5.hasNext__Z()) {
      const arg1 = this$5.next__O();
      const h = $m_sr_Statics$().anyHash__O__I(arg1);
      elem = ((elem + h) | 0);
      elem$1 = (elem$1 ^ h);
      elem$3 = $imul(elem$3, (1 | h));
      elem$2 = ((1 + elem$2) | 0)
    };
    let h$1 = seed;
    h$1 = this.mix__I__I__I(h$1, elem);
    h$1 = this.mix__I__I__I(h$1, elem$1);
    h$1 = this.mixLast__I__I__I(h$1, elem$3);
    return this.finalizeHash__I__I__I(h$1, elem$2)
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  arrayHash__O__I__I(a, seed) {
    let h = seed;
    const l = $m_sr_ScalaRunTime$().array_length__O__I(a);
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = $as_sci_List(elems.tail__O());
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
  arrayHash$mZc$sp__AZ__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, (a.get(0) ? 1231 : 1237)), 1);
        break
      }
      default: {
        const initial = (a.get(0) ? 1231 : 1237);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = (a.get(1) ? 1231 : 1237);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = (a.get(i) ? 1231 : 1237);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, (a.get(i) ? 1231 : 1237));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mBc$sp__AB__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
        break
      }
      default: {
        const initial = a.get(0);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.get(1);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.get(i);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.get(i));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mCc$sp__AC__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
        break
      }
      default: {
        const initial = a.get(0);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.get(1);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.get(i);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.get(i));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mDc$sp__AD__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const dv = a.get(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
        break
      }
      default: {
        const dv$1 = a.get(0);
        const initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const dv$2 = a.get(1);
        let prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const dv$3 = a.get(i);
          const hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const dv$4 = a.get(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().doubleHash__D__I(dv$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mFc$sp__AF__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const fv = a.get(0);
        const this$1 = $m_sr_Statics$();
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, this$1.doubleHash__D__I(fv)), 1);
        break
      }
      default: {
        const fv$1 = a.get(0);
        const this$2 = $m_sr_Statics$();
        const initial = this$2.doubleHash__D__I(fv$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const fv$2 = a.get(1);
        const this$3 = $m_sr_Statics$();
        let prev = this$3.doubleHash__D__I(fv$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const fv$3 = a.get(i);
          const this$4 = $m_sr_Statics$();
          const hash = this$4.doubleHash__D__I(fv$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const fv$4 = a.get(i);
              const this$5 = $m_sr_Statics$();
              h = this.mix__I__I__I($$x2, this$5.doubleHash__D__I(fv$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mIc$sp__AI__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
        break
      }
      default: {
        const initial = a.get(0);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.get(1);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.get(i);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.get(i));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mJc$sp__AJ__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const t = a.get(0);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
        break
      }
      default: {
        const t$1 = a.get(0);
        const lo$1 = t$1.RTLong__f_lo;
        const hi$1 = t$1.RTLong__f_hi;
        const initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const t$2 = a.get(1);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        let prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const t$3 = a.get(i);
          const lo$3 = t$3.RTLong__f_lo;
          const hi$3 = t$3.RTLong__f_hi;
          const hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const t$4 = a.get(i);
              const lo$4 = t$4.RTLong__f_lo;
              const hi$4 = t$4.RTLong__f_hi;
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mSc$sp__AS__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
        break
      }
      default: {
        const initial = a.get(0);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.get(1);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.get(i);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.get(i));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mVc$sp__Ajl_Void__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
        break
      }
      default: {
        h = this.mix__I__I__I(h, 0);
        const h0 = h;
        let prev = 0;
        const rangeDiff = prev;
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          if ((rangeDiff !== ((-prev) | 0))) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, 0);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = 0;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
}
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Double$__doubleStrPat$lzycompute__O = (function($thiz) {
  if (((((1 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Double$__f_doubleStrPat = new RegExp("^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$");
    $thiz.jl_Double$__f_bitmap$0 = (((1 | $thiz.jl_Double$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Double$__f_doubleStrPat
});
const $p_jl_Double$__doubleStrPat__O = (function($thiz) {
  return (((((1 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) : $thiz.jl_Double$__f_doubleStrPat)
});
const $p_jl_Double$__doubleStrHexPat$lzycompute__O = (function($thiz) {
  if (((((2 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Double$__f_doubleStrHexPat = new RegExp("^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$");
    $thiz.jl_Double$__f_bitmap$0 = (((2 | $thiz.jl_Double$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Double$__f_doubleStrHexPat
});
const $p_jl_Double$__doubleStrHexPat__O = (function($thiz) {
  return (((((2 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) : $thiz.jl_Double$__f_doubleStrHexPat)
});
const $p_jl_Double$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
const $p_jl_Double$__parseHexDoubleImpl$1__O__T__D = (function($thiz, match2, s$1) {
  const signStr = $as_T(match2[1]);
  const integralPartStr = $as_T(match2[2]);
  const fractionalPartStr = $as_T(match2[3]);
  const binaryExpStr = $as_T(match2[4]);
  if (((integralPartStr === "") && (fractionalPartStr === ""))) {
    $p_jl_Double$__fail$1__T__E($thiz, s$1)
  };
  const mantissaStr0 = (("" + integralPartStr) + fractionalPartStr);
  const correction1 = ((-($uI(fractionalPartStr.length) << 2)) | 0);
  let i = 0;
  while (true) {
    let $$x1;
    if ((i !== $uI(mantissaStr0.length))) {
      const index = i;
      $$x1 = ((65535 & $uI(mantissaStr0.charCodeAt(index))) === 48)
    } else {
      $$x1 = false
    };
    if ($$x1) {
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  const beginIndex = i;
  const mantissaStr = $as_T(mantissaStr0.substring(beginIndex));
  if ((mantissaStr === "")) {
    if ((signStr === "-")) {
      return (-0)
    } else {
      return 0.0
    }
  };
  const needsCorrection2 = ($uI(mantissaStr.length) > 15);
  const truncatedMantissaStr = (needsCorrection2 ? $as_T(mantissaStr.substring(0, 15)) : mantissaStr);
  const correction2 = (needsCorrection2 ? ((((-15) + $uI(mantissaStr.length)) | 0) << 2) : 0);
  const fullCorrection = ((correction1 + correction2) | 0);
  const mantissa = $uD(parseInt(truncatedMantissaStr, 16));
  const binaryExpDouble = $uD(parseInt(binaryExpStr, 10));
  const binaryExp = $doubleToInt(binaryExpDouble);
  const binExpAndCorrection = ((binaryExp + fullCorrection) | 0);
  const binExpAndCorrection_div_3 = ((binExpAndCorrection / 3) | 0);
  const b = binExpAndCorrection_div_3;
  const correctingPow = $uD(Math.pow(2.0, b));
  const b$1 = ((binExpAndCorrection - (binExpAndCorrection_div_3 << 1)) | 0);
  const correctingPow3 = $uD(Math.pow(2.0, b$1));
  const r = (((mantissa * correctingPow) * correctingPow) * correctingPow3);
  return ((signStr === "-") ? (-r) : r)
});
class $c_jl_Double$ extends $c_O {
  constructor() {
    super();
    this.jl_Double$__f_doubleStrPat = null;
    this.jl_Double$__f_doubleStrHexPat = null;
    this.jl_Double$__f_bitmap$0 = 0
  };
  parseDouble__T__D(s) {
    const match1 = $p_jl_Double$__doubleStrPat__O(this).exec(s);
    if ((match1 !== null)) {
      return $uD(parseFloat(match1[1]))
    } else {
      const match2 = $p_jl_Double$__doubleStrHexPat__O(this).exec(s);
      return ((match2 !== null) ? $p_jl_Double$__parseHexDoubleImpl$1__O__T__D(this, match2, s) : $p_jl_Double$__fail$1__T__E(this, s))
    }
  };
}
const $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
let $n_jl_Double$ = (void 0);
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$()
  };
  return $n_jl_Double$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
  bitCount__I__I(i) {
    const t1 = ((i - (1431655765 & (i >> 1))) | 0);
    const t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
    return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
class $c_jl_StackTraceElement extends $c_O {
  constructor(declaringClass, methodName, fileName, lineNumber) {
    super();
    this.jl_StackTraceElement__f_declaringClass = null;
    this.jl_StackTraceElement__f_methodName = null;
    this.jl_StackTraceElement__f_fileName = null;
    this.jl_StackTraceElement__f_lineNumber = 0;
    this.jl_StackTraceElement__f_columnNumber = 0;
    this.jl_StackTraceElement__f_declaringClass = declaringClass;
    this.jl_StackTraceElement__f_methodName = methodName;
    this.jl_StackTraceElement__f_fileName = fileName;
    this.jl_StackTraceElement__f_lineNumber = lineNumber;
    this.jl_StackTraceElement__f_columnNumber = (-1)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_jl_StackTraceElement)) {
      const x2 = $as_jl_StackTraceElement(that);
      return ((((this.jl_StackTraceElement__f_fileName === x2.jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === x2.jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_declaringClass === x2.jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === x2.jl_StackTraceElement__f_methodName))
    } else {
      return false
    }
  };
  toString__T() {
    let result = "";
    if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
      result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".")
    };
    result = (("" + result) + this.jl_StackTraceElement__f_methodName);
    if ((this.jl_StackTraceElement__f_fileName === null)) {
      result = (result + "(Unknown Source)")
    } else {
      result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
      if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
        if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
          result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber)
        }
      };
      result = (result + ")")
    };
    return result
  };
  hashCode__I() {
    return ($f_T__hashCode__I(this.jl_StackTraceElement__f_declaringClass) ^ $f_T__hashCode__I(this.jl_StackTraceElement__f_methodName))
  };
}
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"))
}
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)))
}
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth))
}
const $d_jl_StackTraceElement = new $TypeData().initClass({
  jl_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", {
  jl_StackTraceElement: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackTraceElement.prototype.$classData = $d_jl_StackTraceElement;
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw new $c_jl_StringIndexOutOfBoundsException()
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.get(i);
      result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
      i = ((1 + i) | 0)
    };
    return result
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
class $c_jl_Thread extends $c_O {
  constructor(dummy) {
    super();
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = null;
    this.jl_Thread__f_java$lang$Thread$$interruptedState = false;
    this.jl_Thread__f_name = "main"
  };
  run__V() {
    /*<skip>*/
  };
}
const $d_jl_Thread = new $TypeData().initClass({
  jl_Thread: 0
}, false, "java.lang.Thread", {
  jl_Thread: 1,
  O: 1,
  jl_Runnable: 1
});
$c_jl_Thread.prototype.$classData = $d_jl_Thread;
const $p_jl_Throwable__printStackTraceImpl__O__V = (function($thiz, sprintln) {
  $thiz.getStackTrace__Ajl_StackTraceElement();
  sprintln($thiz.toString__T());
  if (($thiz.jl_Throwable__f_stackTrace.u.length !== 0)) {
    let i = 0;
    while ((i < $thiz.jl_Throwable__f_stackTrace.u.length)) {
      sprintln(("  at " + $thiz.jl_Throwable__f_stackTrace.get(i)));
      i = ((1 + i) | 0)
    }
  } else {
    sprintln("  <no stack trace available>")
  };
  let wCause = $thiz;
  while (true) {
    const $$x3 = wCause;
    const this$1 = wCause;
    let $$x2;
    if (($$x3 !== this$1.jl_Throwable__f_e)) {
      const this$2 = wCause;
      $$x2 = (this$2.jl_Throwable__f_e !== null)
    } else {
      $$x2 = false
    };
    if ($$x2) {
      const parentTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const this$3 = wCause;
      wCause = this$3.jl_Throwable__f_e;
      const thisTrace = wCause.getStackTrace__Ajl_StackTraceElement();
      const thisLength = thisTrace.u.length;
      const parentLength = parentTrace.u.length;
      sprintln(("Caused by: " + wCause.toString__T()));
      if ((thisLength !== 0)) {
        let sameFrameCount = 0;
        while (true) {
          let $$x1;
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            const x = thisTrace.get((((-1) + ((thisLength - sameFrameCount) | 0)) | 0));
            const x$2 = parentTrace.get((((-1) + ((parentLength - sameFrameCount) | 0)) | 0));
            $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
          } else {
            $$x1 = false
          };
          if ($$x1) {
            sameFrameCount = ((1 + sameFrameCount) | 0)
          } else {
            break
          }
        };
        if ((sameFrameCount > 0)) {
          sameFrameCount = (((-1) + sameFrameCount) | 0)
        };
        const lengthToPrint = ((thisLength - sameFrameCount) | 0);
        let i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          sprintln(("  at " + thisTrace.get(i$2)));
          i$2 = ((1 + i$2) | 0)
        };
        if ((sameFrameCount > 0)) {
          sprintln((("  ... " + sameFrameCount) + " more"))
        }
      } else {
        sprintln("  <no stack trace available>")
      }
    } else {
      break
    }
  }
});
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      const e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        const this$1 = $m_jl_StackTrace$();
        this.jl_Throwable__f_stackTrace = $p_jl_StackTrace$__extract__O__Ajl_StackTraceElement(this$1, this.jl_Throwable__f_stackTraceStateInternal)
      } else {
        this.jl_Throwable__f_stackTrace = $newArrayObject($d_jl_StackTraceElement.getArrayOf(), [0])
      }
    };
    return this.jl_Throwable__f_stackTrace
  };
  printStackTrace__Ljava_io_PrintStream__V(s) {
    $p_jl_Throwable__printStackTraceImpl__O__V(this, ((arg$outer, s$1) => ((arg1$2) => {
      const arg1 = $as_T(arg1$2);
      s$1.println__T__V(arg1)
    }))(this, s))
  };
  toString__T() {
    const className = $objectClassName(this);
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
const $ct_ju_concurrent_atomic_AtomicReference__O__ = (function($thiz, value) {
  $thiz.ju_concurrent_atomic_AtomicReference__f_value = value;
  return $thiz
});
class $c_ju_concurrent_atomic_AtomicReference extends $c_O {
  constructor() {
    super();
    this.ju_concurrent_atomic_AtomicReference__f_value = null
  };
  compareAndSet__O__O__Z(expect, update) {
    if (Object.is(expect, this.ju_concurrent_atomic_AtomicReference__f_value)) {
      this.ju_concurrent_atomic_AtomicReference__f_value = update;
      return true
    } else {
      return false
    }
  };
  toString__T() {
    const obj = this.ju_concurrent_atomic_AtomicReference__f_value;
    return ("" + obj)
  };
}
const $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult = (function($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
});
class $c_ju_regex_Matcher extends $c_O {
  constructor(pattern0, input0, regionStart0, regionEnd0) {
    super();
    this.ju_regex_Matcher__f_pattern0 = null;
    this.ju_regex_Matcher__f_input0 = null;
    this.ju_regex_Matcher__f_regionStart0 = 0;
    this.ju_regex_Matcher__f_regionEnd0 = 0;
    this.ju_regex_Matcher__f_regexp = null;
    this.ju_regex_Matcher__f_inputstr = null;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = false;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    this.ju_regex_Matcher__f_pattern0 = pattern0;
    this.ju_regex_Matcher__f_input0 = input0;
    this.ju_regex_Matcher__f_regionStart0 = regionStart0;
    this.ju_regex_Matcher__f_regionEnd0 = regionEnd0;
    this.ju_regex_Matcher__f_regexp = this.ju_regex_Matcher__f_pattern0.newJSRegExp__sjs_js_RegExp();
    this.ju_regex_Matcher__f_inputstr = $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.ju_regex_Matcher__f_input0, this.ju_regex_Matcher__f_regionStart0, this.ju_regex_Matcher__f_regionEnd0));
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0
  };
  find__Z() {
    if (this.ju_regex_Matcher__f_canStillFind) {
      this.ju_regex_Matcher__f_lastMatchIsValid = true;
      this.ju_regex_Matcher__f_lastMatch = this.ju_regex_Matcher__f_regexp.exec(this.ju_regex_Matcher__f_inputstr);
      if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
        const value = this.ju_regex_Matcher__f_lastMatch[0];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        const this$5 = $as_T(value);
        if ((this$5 === "")) {
          const ev$1 = this.ju_regex_Matcher__f_regexp;
          ev$1.lastIndex = ((1 + $uI(ev$1.lastIndex)) | 0)
        }
      } else {
        this.ju_regex_Matcher__f_canStillFind = false
      };
      this.ju_regex_Matcher__f_startOfGroupCache = null;
      return (this.ju_regex_Matcher__f_lastMatch !== null)
    } else {
      return false
    }
  };
  appendReplacement__jl_StringBuffer__T__ju_regex_Matcher(sb, replacement) {
    const this$1 = this.ju_regex_Matcher__f_inputstr;
    const beginIndex = this.ju_regex_Matcher__f_appendPos;
    const endIndex = this.start__I();
    sb.append__T__jl_StringBuffer($as_T(this$1.substring(beginIndex, endIndex)));
    const len = $uI(replacement.length);
    let i = 0;
    while ((i < len)) {
      const index = i;
      const x1 = (65535 & $uI(replacement.charCodeAt(index)));
      switch (x1) {
        case 36: {
          i = ((1 + i) | 0);
          const j = i;
          while (true) {
            let $$x1;
            if ((i < len)) {
              const index$1 = i;
              const c = (65535 & $uI(replacement.charCodeAt(index$1)));
              $$x1 = ((c >= 48) && (c <= 57))
            } else {
              $$x1 = false
            };
            if ($$x1) {
              i = ((1 + i) | 0)
            } else {
              break
            }
          };
          const endIndex$1 = i;
          const s = $as_T(replacement.substring(j, endIndex$1));
          const this$2 = $m_jl_Integer$();
          const group = this$2.parseInt__T__I__I(s, 10);
          sb.append__T__jl_StringBuffer(this.group__I__T(group));
          break
        }
        case 92: {
          i = ((1 + i) | 0);
          if ((i < len)) {
            const index$2 = i;
            sb.append__C__jl_StringBuffer((65535 & $uI(replacement.charCodeAt(index$2))))
          };
          i = ((1 + i) | 0);
          break
        }
        default: {
          sb.append__C__jl_StringBuffer(x1);
          i = ((1 + i) | 0)
        }
      }
    };
    this.ju_regex_Matcher__f_appendPos = this.end__I();
    return this
  };
  appendTail__jl_StringBuffer__jl_StringBuffer(sb) {
    const this$1 = this.ju_regex_Matcher__f_inputstr;
    const beginIndex = this.ju_regex_Matcher__f_appendPos;
    sb.append__T__jl_StringBuffer($as_T(this$1.substring(beginIndex)));
    const this$3 = this.ju_regex_Matcher__f_inputstr;
    this.ju_regex_Matcher__f_appendPos = $uI(this$3.length);
    return sb
  };
  replaceFirst__T__T(replacement) {
    this.reset__ju_regex_Matcher();
    if (this.find__Z()) {
      const sb = $ct_jl_StringBuffer__(new $c_jl_StringBuffer());
      this.appendReplacement__jl_StringBuffer__T__ju_regex_Matcher(sb, replacement);
      this.appendTail__jl_StringBuffer__jl_StringBuffer(sb);
      return sb.toString__T()
    } else {
      return this.ju_regex_Matcher__f_inputstr
    }
  };
  reset__ju_regex_Matcher() {
    this.ju_regex_Matcher__f_regexp.lastIndex = 0;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    return this
  };
  start__I() {
    return $uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index)
  };
  end__I() {
    const $$x1 = this.start__I();
    const this$1 = this.group__T();
    return (($$x1 + $uI(this$1.length)) | 0)
  };
  group__T() {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[0];
    if ((value === (void 0))) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
    };
    return $as_T(value)
  };
  group__I__T(group) {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[group];
    $m_s_$less$colon$less$();
    return $as_T(((value === (void 0)) ? null : value))
  };
}
const $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
const $p_ju_regex_Pattern__jsPattern__T = (function($thiz) {
  return $as_T($thiz.ju_regex_Pattern__f_jsRegExp.source)
});
const $p_ju_regex_Pattern__jsFlags__T = (function($thiz) {
  return ((($uZ($thiz.ju_regex_Pattern__f_jsRegExp.global) ? "g" : "") + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.ignoreCase) ? "i" : "")) + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.multiline) ? "m" : ""))
});
class $c_ju_regex_Pattern extends $c_O {
  constructor(jsRegExp, _pattern, _flags) {
    super();
    this.ju_regex_Pattern__f_groupCount = 0;
    this.ju_regex_Pattern__f_groupStartMapper = null;
    this.ju_regex_Pattern__f_jsRegExp = null;
    this.ju_regex_Pattern__f__pattern = null;
    this.ju_regex_Pattern__f__flags = 0;
    this.ju_regex_Pattern__f_bitmap$0 = 0;
    this.ju_regex_Pattern__f_jsRegExp = jsRegExp;
    this.ju_regex_Pattern__f__pattern = _pattern;
    this.ju_regex_Pattern__f__flags = _flags
  };
  toString__T() {
    return this.ju_regex_Pattern__f__pattern
  };
  newJSRegExp__sjs_js_RegExp() {
    const r = new RegExp(this.ju_regex_Pattern__f_jsRegExp);
    return ((!Object.is(r, this.ju_regex_Pattern__f_jsRegExp)) ? r : new RegExp($p_ju_regex_Pattern__jsPattern__T(this), $p_ju_regex_Pattern__jsFlags__T(this)))
  };
  split__jl_CharSequence__I__AT(input, limit) {
    const inputStr = $dp_toString__T(input);
    if ((inputStr === "")) {
      return $makeNativeArrayWrapper($d_T.getArrayOf(), [""])
    } else {
      const lim = ((limit > 0) ? limit : 2147483647);
      const matcher = new $c_ju_regex_Matcher(this, inputStr, 0, $uI(inputStr.length));
      let capacity = 0;
      let size = 0;
      let jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      let prevEnd = 0;
      let size$1 = 0;
      while (((size$1 < (((-1) + lim) | 0)) && matcher.find__Z())) {
        if ((matcher.end__I() !== 0)) {
          const beginIndex = prevEnd;
          const endIndex = matcher.start__I();
          const elem = $as_T(inputStr.substring(beginIndex, endIndex));
          const unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem);
          size$1 = ((1 + size$1) | 0)
        };
        prevEnd = matcher.end__I()
      };
      const beginIndex$1 = prevEnd;
      const elem$1 = $as_T(inputStr.substring(beginIndex$1));
      const unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem$1);
      const result = $makeNativeArrayWrapper($d_T.getArrayOf(), jsElems);
      if ((limit !== 0)) {
        return result
      } else {
        let actualLength = result.u.length;
        while (((actualLength !== 0) && (result.get((((-1) + actualLength) | 0)) === ""))) {
          actualLength = (((-1) + actualLength) | 0)
        };
        if ((actualLength === result.u.length)) {
          return result
        } else {
          const actualResult = $newArrayObject($d_T.getArrayOf(), [actualLength]);
          const length = actualLength;
          $systemArraycopy(result, 0, actualResult, 0, length);
          return actualResult
        }
      }
    }
  };
}
const $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
class $c_ju_regex_Pattern$ extends $c_O {
  constructor() {
    super();
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = null;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = null;
    $n_ju_regex_Pattern$ = this;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = new RegExp("^\\\\Q(.|\\n|\\r)\\\\E$");
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)")
  };
  compile__T__I__ju_regex_Pattern(regex, flags) {
    let x1;
    if (((16 & flags) !== 0)) {
      x1 = new $c_T2(this.quote__T__T(regex), flags)
    } else {
      const m = this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat.exec(regex);
      let this$5;
      if ((m !== null)) {
        const value = m[1];
        if ((value === (void 0))) {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
        };
        this$5 = new $c_s_Some(new $c_T2(this.quote__T__T($as_T(value)), flags))
      } else {
        this$5 = $m_s_None$()
      };
      let this$28;
      if (this$5.isEmpty__Z()) {
        const this$6 = $m_ju_regex_Pattern$();
        const m$1 = this$6.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat.exec(regex);
        if ((m$1 !== null)) {
          const value$1 = m$1[0];
          if ((value$1 === (void 0))) {
            throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get")
          };
          const this$11 = $as_T(value$1);
          const beginIndex = $uI(this$11.length);
          const newPat = $as_T(regex.substring(beginIndex));
          let elem = 0;
          elem = flags;
          const value$2 = m$1[1];
          if ((value$2 !== (void 0))) {
            const chars = $as_T(value$2);
            const end = $uI(chars.length);
            let i = 0;
            while ((i < end)) {
              const arg1 = i;
              elem = (elem | $m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars.charCodeAt(arg1)))));
              i = ((1 + i) | 0)
            }
          };
          const value$3 = m$1[2];
          if ((value$3 !== (void 0))) {
            const chars$3 = $as_T(value$3);
            const end$1 = $uI(chars$3.length);
            let i$1 = 0;
            while ((i$1 < end$1)) {
              const arg1$1 = i$1;
              elem = (elem & (~$m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars$3.charCodeAt(arg1$1))))));
              i$1 = ((1 + i$1) | 0)
            }
          };
          this$28 = new $c_s_Some(new $c_T2(newPat, elem))
        } else {
          this$28 = $m_s_None$()
        }
      } else {
        this$28 = this$5
      };
      x1 = $as_T2((this$28.isEmpty__Z() ? new $c_T2(regex, flags) : this$28.get__O()))
    };
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const jsPattern = $as_T(x1.T2__f__1);
    const flags1 = $uI(x1.T2__f__2);
    const jsFlags = (("g" + (((2 & flags1) !== 0) ? "i" : "")) + (((8 & flags1) !== 0) ? "m" : ""));
    const jsRegExp = new RegExp(jsPattern, jsFlags);
    return new $c_ju_regex_Pattern(jsRegExp, regex, flags1)
  };
  quote__T__T(s) {
    let result = "";
    let i = 0;
    while ((i < $uI(s.length))) {
      const index = i;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const $$x2 = result;
      let $$x1;
      switch (c) {
        case 92:
        case 46:
        case 40:
        case 41:
        case 91:
        case 93:
        case 123:
        case 125:
        case 124:
        case 63:
        case 42:
        case 43:
        case 94:
        case 36: {
          $$x1 = ("\\" + $bC(c));
          break
        }
        default: {
          $$x1 = $bC(c)
        }
      };
      result = (("" + $$x2) + $$x1);
      i = ((1 + i) | 0)
    };
    return result
  };
  java$util$regex$Pattern$$charToFlag__C__I(c) {
    switch (c) {
      case 105: {
        return 2;
        break
      }
      case 100: {
        return 1;
        break
      }
      case 109: {
        return 8;
        break
      }
      case 115: {
        return 32;
        break
      }
      case 117: {
        return 64;
        break
      }
      case 120: {
        return 4;
        break
      }
      case 85: {
        return 256;
        break
      }
      default: {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
      }
    }
  };
}
const $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern$.prototype.$classData = $d_ju_regex_Pattern$;
let $n_ju_regex_Pattern$ = (void 0);
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$()
  };
  return $n_ju_regex_Pattern$
}
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_O {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
  equals__AO__AO__Z(xs, ys) {
    if ((xs === ys)) {
      return true
    };
    if ((xs.u.length !== ys.u.length)) {
      return false
    };
    const len = xs.u.length;
    let i = 0;
    while ((i < len)) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(xs.get(i), ys.get(i)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_LowPriorityImplicits extends $c_s_LowPriorityImplicits2 {
  wrapRefArray__AO__scm_ArraySeq$ofRef(xs) {
    if ((xs === null)) {
      return null
    } else if ((xs.u.length === 0)) {
      const this$3 = $m_scm_ArraySeq$();
      $m_s_reflect_ManifestFactory$ObjectManifest$();
      return this$3.scm_ArraySeq$__f_EmptyArraySeq
    } else {
      return new $c_scm_ArraySeq$ofRef(xs)
    }
  };
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
const $f_s_PartialFunction__applyOrElse__O__F1__O = (function($thiz, x, default$1) {
  return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : default$1.apply__O__O(x))
});
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)))
}
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"))
}
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)))
}
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth))
}
class $c_T2$ extends $c_O {
  toString__T() {
    return "Tuple2"
  };
}
const $d_T2$ = new $TypeData().initClass({
  T2$: 0
}, false, "scala.Tuple2$", {
  T2$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_T2$.prototype.$classData = $d_T2$;
let $n_T2$ = (void 0);
function $m_T2$() {
  if ((!$n_T2$)) {
    $n_T2$ = new $c_T2$()
  };
  return $n_T2$
}
const $f_sc_IterableFactory__range__O__O__s_math_Integral__O = (function($thiz, start, end, evidence$3) {
  $m_sci_NumericRange$();
  const step = evidence$3.fromInt__I__O(1);
  return $thiz.from__sc_IterableOnce__O(new $c_sci_NumericRange$Exclusive(start, end, step, evidence$3))
});
class $c_sci_$colon$colon$ extends $c_O {
  toString__T() {
    return "::"
  };
}
const $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
let $n_sci_$colon$colon$ = (void 0);
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
class $c_sci_HashMapBuilder$$anon$2 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashMap__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_MapNode__O__O__I__I__I__V(outer.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashMapBuilder$$anon$2 = new $TypeData().initClass({
  sci_HashMapBuilder$$anon$2: 0
}, false, "scala.collection.immutable.HashMapBuilder$$anon$2", {
  sci_HashMapBuilder$$anon$2: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashMapBuilder$$anon$2.prototype.$classData = $d_sci_HashMapBuilder$$anon$2;
class $c_sci_HashSetBuilder$$anon$1 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashSet__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_SetNode__O__I__I__I__V(outer.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashSetBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashSetBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashSetBuilder$$anon$1", {
  sci_HashSetBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashSetBuilder$$anon$1.prototype.$classData = $d_sci_HashSetBuilder$$anon$1;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
class $c_sci_MapNode extends $c_sci_Node {
}
function $as_sci_MapNode(obj) {
  return (((obj instanceof $c_sci_MapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapNode"))
}
function $isArrayOf_sci_MapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapNode)))
}
function $asArrayOf_sci_MapNode(obj, depth) {
  return (($isArrayOf_sci_MapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapNode;", depth))
}
const $p_sci_NumericRange$__bigDecimalCheckUnderflow__O__O__O__s_math_Integral__V = (function($thiz, start, end, step, num) {
  if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(num.minus__O__O__O(num.plus__O__O__O(start, step), start), step))) {
    $p_sci_NumericRange$__FAIL$1__O__O__V($thiz, start, step)
  };
  if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(num.minus__O__O__O(end, num.minus__O__O__O(end, step)), step))) {
    $p_sci_NumericRange$__FAIL$1__O__O__V($thiz, end, step)
  }
});
const $p_sci_NumericRange$__FAIL$1__O__O__V = (function($thiz, boundary, step) {
  let msg;
  if ((boundary instanceof $c_s_math_BigDecimal)) {
    const x2 = $as_s_math_BigDecimal(boundary);
    msg = ("Precision " + x2.mc__Ljava_math_MathContext().getPrecision__I())
  } else {
    msg = "Precision"
  };
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((msg + " inadequate to represent steps of size ") + step) + " near ") + boundary))
});
const $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O = (function($thiz, t, num$1, limit$1) {
  if ($f_s_math_Ordering__gt__O__O__Z(num$1, t, limit$1)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "More than Int.MaxValue elements.")
  } else {
    return t
  }
});
class $c_sci_NumericRange$ extends $c_O {
  constructor() {
    super();
    this.sci_NumericRange$__f_defaultOrdering = null;
    $n_sci_NumericRange$ = this;
    const this$14 = $m_sci_Map$();
    const self = $m_s_math_Numeric$IntIsIntegral$();
    const y = $m_s_math_Ordering$Int$();
    const $$x4 = new $c_T2(self, y);
    const self$1 = $m_s_math_Numeric$ShortIsIntegral$();
    const y$1 = $m_s_math_Ordering$Short$();
    const $$x3 = new $c_T2(self$1, y$1);
    const self$2 = $m_s_math_Numeric$ByteIsIntegral$();
    const y$2 = $m_s_math_Ordering$Byte$();
    const $$x2 = new $c_T2(self$2, y$2);
    const self$3 = $m_s_math_Numeric$CharIsIntegral$();
    const y$3 = $m_s_math_Ordering$Char$();
    const $$x1 = new $c_T2(self$3, y$3);
    const self$4 = $m_s_math_Numeric$LongIsIntegral$();
    const y$4 = $m_s_math_Ordering$Long$();
    const array = [$$x4, $$x3, $$x2, $$x1, new $c_T2(self$4, y$4)];
    const elems = new $c_sjsr_WrappedVarArgs(array);
    this.sci_NumericRange$__f_defaultOrdering = this$14.from__sc_IterableOnce__sci_Map(elems)
  };
  count__O__O__O__Z__s_math_Integral__I(start, end, step, isInclusive, num) {
    const zero = num.fromInt__I__O(0);
    const upward = $f_s_math_Ordering__lt__O__O__Z(num, start, end);
    const posStep = $f_s_math_Ordering__gt__O__O__Z(num, step, zero);
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(step, zero)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(start, end)) {
      return (isInclusive ? 1 : 0)
    } else if ((upward !== posStep)) {
      return 0
    } else {
      const startint = num.toInt__O__I(start);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(start, num.fromInt__I__O(startint))) {
        const endint = num.toInt__O__I(end);
        if ($m_sr_BoxesRunTime$().equals__O__O__Z(end, num.fromInt__I__O(endint))) {
          const stepint = num.toInt__O__I(step);
          if ($m_sr_BoxesRunTime$().equals__O__O__Z(step, num.fromInt__I__O(stepint))) {
            if (isInclusive) {
              const isEmpty = (((startint > endint) && (stepint > 0)) || ((startint < endint) && (stepint < 0)));
              if ((stepint === 0)) {
                throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
              };
              let scala$collection$immutable$Range$$numRangeElements;
              if (isEmpty) {
                scala$collection$immutable$Range$$numRangeElements = 0
              } else {
                const hi = (endint >> 31);
                const hi$1 = (startint >> 31);
                const lo = ((endint - startint) | 0);
                const hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ endint)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
                const hi$3 = (stepint >> 31);
                const this$6 = $m_RTLong$();
                const lo$1 = this$6.divideImpl__I__I__I__I__I(lo, hi$2, stepint, hi$3);
                const hi$4 = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
                const lo$2 = ((1 + lo$1) | 0);
                const hi$5 = ((lo$2 === 0) ? ((1 + hi$4) | 0) : hi$4);
                scala$collection$immutable$Range$$numRangeElements = (((hi$5 === 0) ? (((-2147483648) ^ lo$2) > (-1)) : (hi$5 > 0)) ? (-1) : lo$2)
              };
              switch (stepint) {
                case 1: {
                  break
                }
                case (-1): {
                  break
                }
                default: {
                  const hi$6 = (endint >> 31);
                  const hi$7 = (startint >> 31);
                  const lo$3 = ((endint - startint) | 0);
                  const hi$8 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ endint)) ? (((-1) + ((hi$6 - hi$7) | 0)) | 0) : ((hi$6 - hi$7) | 0));
                  const hi$9 = (stepint >> 31);
                  const this$12 = $m_RTLong$();
                  const lo$4 = this$12.remainderImpl__I__I__I__I__I(lo$3, hi$8, stepint, hi$9)
                }
              };
              return ((scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(startint, endint, stepint, true) : scala$collection$immutable$Range$$numRangeElements)
            } else {
              const isEmpty$1 = ((((startint > endint) && (stepint > 0)) || ((startint < endint) && (stepint < 0))) || (startint === endint));
              if ((stepint === 0)) {
                throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
              };
              let scala$collection$immutable$Range$$numRangeElements$1;
              if (isEmpty$1) {
                scala$collection$immutable$Range$$numRangeElements$1 = 0
              } else {
                const hi$11 = (endint >> 31);
                const hi$12 = (startint >> 31);
                const lo$5 = ((endint - startint) | 0);
                const hi$13 = ((((-2147483648) ^ lo$5) > ((-2147483648) ^ endint)) ? (((-1) + ((hi$11 - hi$12) | 0)) | 0) : ((hi$11 - hi$12) | 0));
                const hi$14 = (stepint >> 31);
                const this$18 = $m_RTLong$();
                const lo$6 = this$18.divideImpl__I__I__I__I__I(lo$5, hi$13, stepint, hi$14);
                const hi$15 = this$18.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
                const hi$16 = (endint >> 31);
                const hi$17 = (startint >> 31);
                const lo$7 = ((endint - startint) | 0);
                const hi$18 = ((((-2147483648) ^ lo$7) > ((-2147483648) ^ endint)) ? (((-1) + ((hi$16 - hi$17) | 0)) | 0) : ((hi$16 - hi$17) | 0));
                const hi$19 = (stepint >> 31);
                const this$23 = $m_RTLong$();
                const lo$8 = this$23.remainderImpl__I__I__I__I__I(lo$7, hi$18, stepint, hi$19);
                const hi$20 = this$23.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
                let value;
                if ((!((lo$8 === 0) && (hi$20 === 0)))) {
                  value = 1
                } else {
                  value = 0
                };
                const hi$21 = (value >> 31);
                const lo$9 = ((lo$6 + value) | 0);
                const hi$22 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$6)) ? ((1 + ((hi$15 + hi$21) | 0)) | 0) : ((hi$15 + hi$21) | 0));
                scala$collection$immutable$Range$$numRangeElements$1 = (((hi$22 === 0) ? (((-2147483648) ^ lo$9) > (-1)) : (hi$22 > 0)) ? (-1) : lo$9)
              };
              switch (stepint) {
                case 1: {
                  break
                }
                case (-1): {
                  break
                }
                default: {
                  const hi$23 = (endint >> 31);
                  const hi$24 = (startint >> 31);
                  const lo$10 = ((endint - startint) | 0);
                  const hi$25 = ((((-2147483648) ^ lo$10) > ((-2147483648) ^ endint)) ? (((-1) + ((hi$23 - hi$24) | 0)) | 0) : ((hi$23 - hi$24) | 0));
                  const hi$26 = (stepint >> 31);
                  const this$30 = $m_RTLong$();
                  const lo$11 = this$30.remainderImpl__I__I__I__I__I(lo$10, hi$25, stepint, hi$26)
                }
              };
              return ((scala$collection$immutable$Range$$numRangeElements$1 < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(startint, endint, stepint, false) : scala$collection$immutable$Range$$numRangeElements$1)
            }
          }
        }
      };
      if ($is_s_math_Numeric$BigDecimalAsIfIntegral(num)) {
        $p_sci_NumericRange$__bigDecimalCheckUnderflow__O__O__O__s_math_Integral__V(this, start, end, step, num)
      };
      const one = num.fromInt__I__O(1);
      const limit = num.fromInt__I__O(2147483647);
      const startside = num.sign__O__O(start);
      const endside = num.sign__O__O(end);
      const x = num.times__O__O__O(startside, endside);
      let $$x1;
      if ($f_s_math_Ordering__gteq__O__O__Z(num, x, zero)) {
        const diff = num.minus__O__O__O(end, start);
        const quotient = $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O(this, num.quot__O__O__O(diff, step), num, limit);
        const remainder = num.minus__O__O__O(diff, num.times__O__O__O(quotient, step));
        $$x1 = (((!isInclusive) && $m_sr_BoxesRunTime$().equals__O__O__Z(zero, remainder)) ? quotient : $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O(this, num.plus__O__O__O(quotient, one), num, limit))
      } else {
        const negone = num.fromInt__I__O((-1));
        const startlim = (posStep ? negone : one);
        const startdiff = num.minus__O__O__O(startlim, start);
        const startq = $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O(this, num.quot__O__O__O(startdiff, step), num, limit);
        const waypointA = ($m_sr_BoxesRunTime$().equals__O__O__Z(startq, zero) ? start : num.plus__O__O__O(start, num.times__O__O__O(startq, step)));
        const waypointB = num.plus__O__O__O(waypointA, step);
        let $$x2;
        if (($f_s_math_Ordering__lt__O__O__Z(num, waypointB, end) !== upward)) {
          $$x2 = ((isInclusive && $m_sr_BoxesRunTime$().equals__O__O__Z(waypointB, end)) ? num.plus__O__O__O(startq, num.fromInt__I__O(2)) : num.plus__O__O__O(startq, one))
        } else {
          const enddiff = num.minus__O__O__O(end, waypointB);
          const endq = $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O(this, num.quot__O__O__O(enddiff, step), num, limit);
          const last = ($m_sr_BoxesRunTime$().equals__O__O__Z(endq, zero) ? waypointB : num.plus__O__O__O(waypointB, num.times__O__O__O(endq, step)));
          $$x2 = num.plus__O__O__O(startq, num.plus__O__O__O(endq, (((!isInclusive) && $m_sr_BoxesRunTime$().equals__O__O__Z(last, end)) ? one : num.fromInt__I__O(2))))
        };
        $$x1 = $p_sci_NumericRange$__check$1__O__s_math_Integral__O__O(this, $$x2, num, limit)
      };
      return num.toInt__O__I($$x1)
    }
  };
}
const $d_sci_NumericRange$ = new $TypeData().initClass({
  sci_NumericRange$: 0
}, false, "scala.collection.immutable.NumericRange$", {
  sci_NumericRange$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_NumericRange$.prototype.$classData = $d_sci_NumericRange$;
let $n_sci_NumericRange$ = (void 0);
function $m_sci_NumericRange$() {
  if ((!$n_sci_NumericRange$)) {
    $n_sci_NumericRange$ = new $c_sci_NumericRange$()
  };
  return $n_sci_NumericRange$
}
const $p_sci_Range$__description__I__I__I__Z__T = (function($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
});
class $c_sci_Range$ extends $c_O {
  scala$collection$immutable$Range$$fail__I__I__I__Z__E(start, end, step, isInclusive) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
  };
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sci_SetNode extends $c_sci_Node {
}
function $as_sci_SetNode(obj) {
  return (((obj instanceof $c_sci_SetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetNode"))
}
function $isArrayOf_sci_SetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetNode)))
}
function $asArrayOf_sci_SetNode(obj, depth) {
  return (($isArrayOf_sci_SetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetNode;", depth))
}
const $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable = (function($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
});
class $c_scm_StringBuilder$ extends $c_O {
}
const $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
let $n_scm_StringBuilder$ = (void 0);
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
const $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V = (function($thiz, runnable) {
  if ((runnable === null)) {
    throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "runnable is null")
  };
  const tl = $thiz.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal;
  const b = tl.get__O();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    $as_s_concurrent_BatchingExecutor$SyncBatch(b).push__jl_Runnable__V(runnable)
  } else {
    let i;
    if ((b !== null)) {
      const this$2 = $as_jl_Integer(b);
      i = $uI(this$2)
    } else {
      i = 0
    };
    if ((i < 16)) {
      const i$1 = ((1 + i) | 0);
      tl.set__O__V(i$1);
      try {
        runnable.run__V()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 instanceof $c_jl_InterruptedException)) {
          const x2 = $as_jl_InterruptedException(e$2);
          $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(x2)
        } else if ((e$2 !== null)) {
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(e$2)
          } else {
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          throw e
        }
      } finally {
        tl.set__O__V(b)
      }
    } else {
      const batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.set__O__V(batch);
      batch.run__V();
      tl.set__O__V(b)
    }
  }
});
function $is_s_concurrent_Future(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_Future)))
}
function $as_s_concurrent_Future(obj) {
  return (($is_s_concurrent_Future(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.Future"))
}
function $isArrayOf_s_concurrent_Future(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_Future)))
}
function $asArrayOf_s_concurrent_Future(obj, depth) {
  return (($isArrayOf_s_concurrent_Future(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.Future;", depth))
}
class $c_s_concurrent_impl_Promise$ManyCallbacks extends $c_O {
  constructor(first, rest) {
    super();
    this.s_concurrent_impl_Promise$ManyCallbacks__f_first = null;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = null;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_first = first;
    this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = rest
  };
  toString__T() {
    return "ManyCallbacks"
  };
}
function $as_s_concurrent_impl_Promise$ManyCallbacks(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$ManyCallbacks) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$ManyCallbacks"))
}
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$ManyCallbacks)))
}
function $asArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$ManyCallbacks;", depth))
}
const $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().initClass({
  s_concurrent_impl_Promise$ManyCallbacks: 0
}, false, "scala.concurrent.impl.Promise$ManyCallbacks", {
  s_concurrent_impl_Promise$ManyCallbacks: 1,
  O: 1,
  s_concurrent_impl_Promise$Callbacks: 1
});
$c_s_concurrent_impl_Promise$ManyCallbacks.prototype.$classData = $d_s_concurrent_impl_Promise$ManyCallbacks;
class $c_s_math_Fractional$ extends $c_O {
}
const $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
let $n_s_math_Fractional$ = (void 0);
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
class $c_s_math_Integral$ extends $c_O {
}
const $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
let $n_s_math_Integral$ = (void 0);
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
class $c_s_math_Integral$IntegralOps extends $c_s_math_Numeric$NumericOps {
  constructor(outer, lhs) {
    super();
    this.s_math_Integral$IntegralOps__f_lhs = null;
    this.s_math_Integral$IntegralOps__f_lhs = lhs;
    $ct_s_math_Numeric$NumericOps__s_math_Numeric__O__(this, outer, lhs)
  };
  $div__O__O(rhs) {
    return $as_s_math_Integral(this.s_math_Numeric$NumericOps__f_$outer).quot__O__O__O(this.s_math_Integral$IntegralOps__f_lhs, rhs)
  };
}
const $d_s_math_Integral$IntegralOps = new $TypeData().initClass({
  s_math_Integral$IntegralOps: 0
}, false, "scala.math.Integral$IntegralOps", {
  s_math_Integral$IntegralOps: 1,
  s_math_Numeric$NumericOps: 1,
  O: 1
});
$c_s_math_Integral$IntegralOps.prototype.$classData = $d_s_math_Integral$IntegralOps;
class $c_s_math_Numeric$ extends $c_O {
}
const $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
let $n_s_math_Numeric$ = (void 0);
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
class $c_s_package$$anon$1 extends $c_O {
  toString__T() {
    return "object AnyRef"
  };
}
const $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_s_reflect_Manifest$ extends $c_O {
}
const $d_s_reflect_Manifest$ = new $TypeData().initClass({
  s_reflect_Manifest$: 0
}, false, "scala.reflect.Manifest$", {
  s_reflect_Manifest$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_Manifest$.prototype.$classData = $d_s_reflect_Manifest$;
let $n_s_reflect_Manifest$ = (void 0);
function $m_s_reflect_Manifest$() {
  if ((!$n_s_reflect_Manifest$)) {
    $n_s_reflect_Manifest$ = new $c_s_reflect_Manifest$()
  };
  return $n_s_reflect_Manifest$
}
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction2 extends $c_O {
  toString__T() {
    return "<function2>"
  };
}
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
class $c_s_util_Either$ extends $c_O {
}
const $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
let $n_s_util_Either$ = (void 0);
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
class $c_s_util_Left$ extends $c_O {
  toString__T() {
    return "Left"
  };
}
const $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
let $n_s_util_Left$ = (void 0);
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
class $c_s_util_Right$ extends $c_O {
  toString__T() {
    return "Right"
  };
}
const $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
let $n_s_util_Right$ = (void 0);
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
class $c_s_util_control_NoStackTrace$ extends $c_O {
  constructor() {
    super();
    this.s_util_control_NoStackTrace$__f__noSuppression = false;
    this.s_util_control_NoStackTrace$__f__noSuppression = false
  };
}
const $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
let $n_s_util_control_NoStackTrace$ = (void 0);
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
function $as_jl_Error(obj) {
  return (((obj instanceof $c_jl_Error) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Error"))
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Error)))
}
function $asArrayOf_jl_Error(obj, depth) {
  return (($isArrayOf_jl_Error(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Error;", depth))
}
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_$less$colon$less extends $c_O {
}
class $c_s_Predef$ extends $c_s_LowPriorityImplicits {
  constructor() {
    super();
    this.s_Predef$__f_Map = null;
    this.s_Predef$__f_Set = null;
    this.s_Predef$__f_$minus$greater = null;
    this.s_Predef$__f_Manifest = null;
    this.s_Predef$__f_NoManifest = null;
    $n_s_Predef$ = this;
    $m_s_package$();
    $m_sci_List$();
    this.s_Predef$__f_Map = $m_sci_Map$();
    this.s_Predef$__f_Set = $m_sci_Set$();
    this.s_Predef$__f_$minus$greater = $m_T2$();
    this.s_Predef$__f_Manifest = $m_s_reflect_Manifest$();
    this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$()
  };
  require__Z__V(requirement) {
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
    }
  };
}
const $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
let $n_s_Predef$ = (void 0);
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_ClassTagIterableFactory$AnyIterableDelegate extends $c_O {
  constructor() {
    super();
    this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    const this$3 = this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate;
    $m_s_reflect_ManifestFactory$AnyManifest$();
    const n = it.knownSize__I();
    if ((n > (-1))) {
      const elements = $newArrayObject($d_O.getArrayOf(), [n]);
      const iterator = it.iterator__sc_Iterator();
      let i = 0;
      while ((i < n)) {
        elements.set(i, iterator.next__O());
        i = ((1 + i) | 0)
      };
      return this$3.make__O__scm_ArraySeq(elements)
    } else {
      const this$5 = $m_scm_ArrayBuffer$().from__sc_IterableOnce__scm_ArrayBuffer(it);
      let $$x1;
      if ((this$5.scm_ArrayBuffer__f_size0 >= 0)) {
        const len = this$5.scm_ArrayBuffer__f_size0;
        const destination = $newArrayObject($d_O.getArrayOf(), [len]);
        this$5.copyToArray__O__I__I__I(destination, 0, this$5.scm_ArrayBuffer__f_size0);
        $$x1 = destination
      } else {
        let capacity = 0;
        let size = 0;
        let jsElems = null;
        capacity = 0;
        size = 0;
        jsElems = [];
        const this$8 = new $c_scm_ArrayBufferView(this$5.scm_ArrayBuffer__f_array, this$5.scm_ArrayBuffer__f_size0);
        const it$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$8);
        while (it$1.hasNext__Z()) {
          const elem = it$1.next__O();
          const unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem)
        };
        $$x1 = $makeNativeArrayWrapper($d_O.getArrayOf(), jsElems)
      };
      return this$3.make__O__scm_ArraySeq($$x1)
    }
  };
  newBuilder__scm_Builder() {
    const this$3 = this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate;
    $m_s_reflect_ManifestFactory$AnyManifest$();
    const this$7 = new $c_scm_ArrayBuilder$generic($d_O.getClassOf());
    const f = new $c_sjsr_AnonFunction1(((this$6) => ((x$2) => $m_scm_ArraySeq$().make__O__scm_ArraySeq(x$2)))(this$3));
    return new $c_scm_Builder$$anon$1(this$7, f)
  };
}
const $ct_sc_IterableFactory$Delegate__sc_IterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_IterableFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_IterableFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_IterableFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
  newBuilder__scm_Builder() {
    return this.sc_IterableFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
}
const $f_sc_IterableOps__sizeCompare__I__I = (function($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return (it.hasNext__Z() ? 1 : 0)
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
});
const $f_sc_IterableOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
});
const $f_sc_IterableOps__tail__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
});
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth))
}
const $f_sc_Iterator__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  $thiz.drop__I__sc_Iterator(from);
  while ($thiz.hasNext__Z()) {
    if ($uZ(p.apply__O__O($thiz.next__O()))) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
const $f_sc_Iterator__concat__F0__sc_Iterator = (function($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs)
});
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  newBuilder__scm_Builder() {
    return new $c_sc_Iterator$$anon$21()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
const $ct_sc_MapFactory$Delegate__sc_MapFactory__ = (function($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_MapFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_MapFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_MapFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = $as_sc_View(it);
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = $as_sc_Iterable(it);
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((it$2) => {
      const it = $as_sc_IterableOnce(it$2);
      return $m_sc_View$().from__sc_IterableOnce__sc_View(it)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_BitmapIndexedMapNode extends $c_sci_MapNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedMapNode__f_dataMap = 0;
    this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
    this.sci_BitmapIndexedMapNode__f_content = null;
    this.sci_BitmapIndexedMapNode__f_originalHashes = null;
    this.sci_BitmapIndexedMapNode__f_size = 0;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedMapNode__f_content = content;
    this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedMapNode__f_size = size;
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedMapNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode
  };
  getKey__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get((index << 1))
  };
  getValue__I__O(index) {
    return this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0))
  };
  getPayload__I__T2(index) {
    return new $c_T2(this.sci_BitmapIndexedMapNode__f_content.get((index << 1)), this.sci_BitmapIndexedMapNode__f_content.get(((1 + (index << 1)) | 0)))
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedMapNode__f_originalHashes.get(index)
  };
  getNode__I__sci_MapNode(index) {
    return $as_sci_MapNode(this.sci_BitmapIndexedMapNode__f_content.get((((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - index) | 0)))
  };
  apply__O__I__I__I__O(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
        return this.getValue__I__O(index)
      } else {
        throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      return this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0))
    } else {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, shift, f) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : f.apply__O())
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_MapNode(index$2).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f)
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedMapNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)))
    } else {
      return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos)).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)))
    }
  };
  updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, keyHash, shift, replaceValue) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      const key0UnimprovedHash = this.getHash__I__I(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
        if (replaceValue) {
          const value0 = this.getValue__I__O(index);
          return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value))
        } else {
          return this
        }
      } else {
        const value0$2 = this.getValue__I__O(index);
        const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
        const subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew$2 = subNode.updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
      return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2))
    } else {
      return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value)
    }
  };
  removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, keyHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      const key0 = this.getKey__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key0, key)) {
        const i = this.sci_BitmapIndexedMapNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(keyHash, 0)));
          if ((index === 0)) {
            const array = [this.getKey__I__O(1), this.getValue__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(1)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(1)))
          } else {
            const array$2 = [this.getKey__I__O(0), this.getValue__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedMapNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedMapNode__f_originalHashes.get(0)]), 1, $m_sc_Hashing$().improve__I__I(this.getHash__I__I(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash)
        }
      } else {
        return this
      }
    } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_MapNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_MapNode(key, originalHash, keyHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      return ((subNodeNewSize === 1) ? ((this.sci_BitmapIndexedMapNode__f_size === subNode.size__I()) ? $as_sci_BitmapIndexedMapNode(subNodeNew) : this.copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew)) : ((subNodeNewSize > 1) ? this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew) : this))
    } else {
      return this
    }
  };
  mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [new $c_T2(key0, value0), new $c_T2(key1, value1)];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      const newCachedHash = ((keyHash0 + keyHash1) | 0);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        if ((mask0 < mask1)) {
          const array$1 = [key0, value0, key1, value1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash0, originalHash1]), 2, newCachedHash)
        } else {
          const array$3 = [key1, value1, key0, value0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash1, originalHash0]), 2, newCachedHash)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, newKey, newValue) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(((1 + idx) | 0), newValue);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    dst.set(idx, key);
    dst.set(((1 + idx) | 0), value);
    const destPos = ((2 + idx) | 0);
    const length = ((src.u.length - idx) | 0);
    $systemArraycopy(src, idx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedMapNode(bitpos, keyHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idx = (dataIx << 1);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-2) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idx);
    const srcPos = ((2 + idx) | 0);
    const length = (((-2) + ((src.u.length - idx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, idx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedMapNode__f_content = dst;
    this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
    this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxOld = (dataIx << 1);
    const idxNew = (((((-2) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxOld);
    const srcPos = ((2 + idxOld) | 0);
    const length = ((idxNew - idxOld) | 0);
    $systemArraycopy(src, srcPos, dst, idxOld, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((2 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-2) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndMigrateFromNodeToInline__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedMapNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const idxNew = (dataIxNew << 1);
    const key = node.getKey__I__O(0);
    const value = node.getValue__I__O(0);
    const src = this.sci_BitmapIndexedMapNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, idxNew);
    dst.set(idxNew, key);
    dst.set(((1 + idxNew) | 0), value);
    const destPos = ((2 + idxNew) | 0);
    const length = ((idxOld - idxNew) | 0);
    $systemArraycopy(src, idxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((2 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedMapNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  foreach__F1__V(f) {
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    const iN = $m_jl_Integer$().bitCount__I__I(i);
    let i$1 = 0;
    while ((i$1 < iN)) {
      f.apply__O__O(this.getPayload__I__T2(i$1));
      i$1 = ((1 + i$1) | 0)
    };
    const i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
    const jN = $m_jl_Integer$().bitCount__I__I(i$2);
    let j = 0;
    while ((j < jN)) {
      this.getNode__I__sci_MapNode(j).foreach__F1__V(f);
      j = ((1 + j) | 0)
    }
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === x2.sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === x2.sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === x2.sci_BitmapIndexedMapNode__f_size))) {
          const a = this.sci_BitmapIndexedMapNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedMapNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedMapNode__f_content;
          const a2 = x2.sci_BitmapIndexedMapNode__f_content;
          const length = this.sci_BitmapIndexedMapNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedMapNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedMapNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedMapNode__f_dataMap;
    let i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_MapNode(contentClone.get(i$1)).copy__sci_MapNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedMapNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_MapNode() {
    return this.copy__sci_BitmapIndexedMapNode()
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, originalHash, hash, shift)
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_BitmapIndexedMapNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedMapNode"))
}
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedMapNode)))
}
function $asArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedMapNode;", depth))
}
const $d_sci_BitmapIndexedMapNode = new $TypeData().initClass({
  sci_BitmapIndexedMapNode: 0
}, false, "scala.collection.immutable.BitmapIndexedMapNode", {
  sci_BitmapIndexedMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedMapNode.prototype.$classData = $d_sci_BitmapIndexedMapNode;
class $c_sci_BitmapIndexedSetNode extends $c_sci_SetNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedSetNode__f_dataMap = 0;
    this.sci_BitmapIndexedSetNode__f_nodeMap = 0;
    this.sci_BitmapIndexedSetNode__f_content = null;
    this.sci_BitmapIndexedSetNode__f_originalHashes = null;
    this.sci_BitmapIndexedSetNode__f_size = 0;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedSetNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedSetNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedSetNode__f_content = content;
    this.sci_BitmapIndexedSetNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedSetNode__f_size = size;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedSetNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode
  };
  getPayload__I__O(index) {
    return this.sci_BitmapIndexedSetNode__f_content.get(index)
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedSetNode__f_originalHashes.get(index)
  };
  getNode__I__sci_SetNode(index) {
    return $as_sci_SetNode(this.sci_BitmapIndexedSetNode__f_content.get((((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - index) | 0)))
  };
  contains__O__I__I__I__Z(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedSetNode__f_originalHashes.get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element, this.getPayload__I__O(index)))
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_SetNode(index$2).contains__O__I__I__I__Z(element, originalHash, elementHash, ((5 + shift) | 0))
    };
    return false
  };
  updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if (Object.is(element0, element)) {
        return this
      } else {
        const element0UnimprovedHash = this.getHash__I__I(index);
        const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
        if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          return this
        } else {
          const subNodeNew = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          return this.copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew$2 = subNode.updated__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNode === subNodeNew$2)) {
        return this
      } else {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew$2)
      }
    };
    return this.copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, element, originalHash, elementHash)
  };
  removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(element0, element)) {
        const i = this.sci_BitmapIndexedSetNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedSetNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(elementHash, 0)));
          if ((index === 0)) {
            const array = [this.getPayload__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.set(i$2, iterator.next__O());
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(1)))
          } else {
            const array$2 = [this.getPayload__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.set(i$3, iterator$1.next__O());
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.get(0)))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash)
        }
      } else {
        return this
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      if ((subNodeNewSize === 1)) {
        if ((this.sci_BitmapIndexedSetNode__f_size === subNode.size__I())) {
          return $as_sci_BitmapIndexedSetNode(subNodeNew)
        } else {
          return this.copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, subNode, subNodeNew)
        }
      } else if ((subNodeNewSize > 1)) {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew)
      }
    };
    return this
  };
  mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [key0, key1];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        const newCachedHashCode = ((keyHash0 + keyHash1) | 0);
        if ((mask0 < mask1)) {
          const array$1 = [key0, key1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.set(i, iterator.next__O());
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash0, originalKeyHash1]), 2, newCachedHashCode)
        } else {
          const array$3 = [key1, key0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.set(i$1, iterator$1.next__O());
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash1, originalKeyHash0]), 2, newCachedHashCode)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.set(i$2, iterator$2.next__O());
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedSetNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedSetNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.set(idx, newNode);
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, dst, this.sci_BitmapIndexedSetNode__f_originalHashes, ((((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, key, originalHash, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    dst.set(dataIx, key);
    const destPos = ((1 + dataIx) | 0);
    const length = ((src.u.length - dataIx) | 0);
    $systemArraycopy(src, dataIx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + elementHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = (((-1) + ((src.u.length - dataIx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0))
  };
  copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    dst.set(idxNew, node);
    const srcPos$1 = ((1 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-1) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const srcPos = ((1 + dataIx) | 0);
    const dest = this.sci_BitmapIndexedSetNode__f_content;
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dest, dataIx, length);
    this.sci_BitmapIndexedSetNode__f_content.set(idxNew, node);
    this.sci_BitmapIndexedSetNode__f_dataMap = (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedSetNode__f_nodeMap = (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedSetNode__f_originalHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedSetNode__f_size = (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIxNew);
    dst.set(dataIxNew, node.getPayload__I__O(0));
    const destPos = ((1 + dataIxNew) | 0);
    const length = ((idxOld - dataIxNew) | 0);
    $systemArraycopy(src, dataIxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((1 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedSetNode__f_nodeMap === x2.sci_BitmapIndexedSetNode__f_nodeMap)) && (this.sci_BitmapIndexedSetNode__f_dataMap === x2.sci_BitmapIndexedSetNode__f_dataMap)) && (this.sci_BitmapIndexedSetNode__f_size === x2.sci_BitmapIndexedSetNode__f_size))) {
          const a = this.sci_BitmapIndexedSetNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedSetNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedSetNode__f_content;
          const a2 = x2.sci_BitmapIndexedSetNode__f_content;
          const length = this.sci_BitmapIndexedSetNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.get(i), a2.get(i));
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedSetNode() {
    const contentClone = $asArrayOf_O(this.sci_BitmapIndexedSetNode__f_content.clone__O(), 1);
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    let i$1 = $m_jl_Integer$().bitCount__I__I(i);
    while ((i$1 < contentLength)) {
      contentClone.set(i$1, $as_sci_SetNode(contentClone.get(i$1)).copy__sci_SetNode());
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, contentClone, $asArrayOf_I(this.sci_BitmapIndexedSetNode__f_originalHashes.clone__O(), 1), this.sci_BitmapIndexedSetNode__f_size, this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_SetNode() {
    return this.copy__sci_BitmapIndexedSetNode()
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_BitmapIndexedSetNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedSetNode"))
}
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedSetNode)))
}
function $asArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedSetNode;", depth))
}
const $d_sci_BitmapIndexedSetNode = new $TypeData().initClass({
  sci_BitmapIndexedSetNode: 0
}, false, "scala.collection.immutable.BitmapIndexedSetNode", {
  sci_BitmapIndexedSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedSetNode.prototype.$classData = $d_sci_BitmapIndexedSetNode;
class $c_sci_HashCollisionMapNode extends $c_sci_MapNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionMapNode__f_originalHash = 0;
    this.sci_HashCollisionMapNode__f_hash = 0;
    this.sci_HashCollisionMapNode__f_content = null;
    this.sci_HashCollisionMapNode__f_originalHash = originalHash;
    this.sci_HashCollisionMapNode__f_hash = hash;
    this.sci_HashCollisionMapNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionMapNode__f_content.length__I() >= 2))
  };
  indexOf__O__I(key) {
    const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
    let i = 0;
    while (iter.hasNext__Z()) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z($as_T2(iter.next__O()).T2__f__1, key)) {
        return i
      };
      i = ((1 + i) | 0)
    };
    return (-1)
  };
  size__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  apply__O__I__I__I__O(key, originalHash, hash, shift) {
    const this$1 = this.get__O__I__I__I__s_Option(key, originalHash, hash, shift);
    if (this$1.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    } else {
      return this$1.get__O()
    }
  };
  get__O__I__I__I__s_Option(key, originalHash, hash, shift) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const index = this.indexOf__O__I(key);
      return ((index >= 0) ? new $c_s_Some($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2) : $m_s_None$())
    } else {
      return $m_s_None$()
    }
  };
  getOrElse__O__I__I__I__F0__O(key, originalHash, hash, shift, f) {
    if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
      const x1 = this.indexOf__O__I(key);
      return ((x1 === (-1)) ? f.apply__O() : $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(x1)).T2__f__2)
    } else {
      return f.apply__O()
    }
  };
  containsKey__O__I__I__I__Z(key, originalHash, hash, shift) {
    return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0))
  };
  updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, hash, shift, replaceValue) {
    const index = this.indexOf__O__I(key);
    if ((index >= 0)) {
      if (replaceValue) {
        if (Object.is($as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2, value)) {
          return this
        } else {
          const this$1 = this.sci_HashCollisionMapNode__f_content;
          const elem = new $c_T2(key, value);
          return new $c_sci_HashCollisionMapNode(originalHash, hash, this$1.updateAt__I__O__sci_Vector(index, elem))
        }
      } else {
        return this
      }
    } else {
      return new $c_sci_HashCollisionMapNode(originalHash, hash, this.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value)))
    }
  };
  removed__O__I__I__I__sci_MapNode(key, originalHash, hash, shift) {
    if ((!this.containsKey__O__I__I__I__Z(key, originalHash, hash, shift))) {
      return this
    } else {
      const this$1 = this.sci_HashCollisionMapNode__f_content;
      $m_sci_Vector$();
      const b = new $c_sci_VectorBuilder();
      const it = this$1.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        const keyValuePair = $as_T2(elem);
        if (($m_sr_BoxesRunTime$().equals__O__O__Z(keyValuePair.T2__f__1, key) !== true)) {
          b.addOne__O__sci_VectorBuilder(elem)
        }
      };
      const updatedContent = b.result__sci_Vector();
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const x1$2 = $as_T2(updatedContent.apply__I__O(0));
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2)
        };
        const k = x1$2.T2__f__1;
        const v = x1$2.T2__f__2;
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [k, v];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedMapNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionMapNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_MapNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionMapNode__f_content.length__I()
  };
  getKey__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__1
  };
  getValue__I__O(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2
  };
  getPayload__I__T2(index) {
    return $as_T2(this.sci_HashCollisionMapNode__f_content.apply__I__O(index))
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionMapNode__f_originalHash
  };
  foreach__F1__V(f) {
    const this$1 = this.sci_HashCollisionMapNode__f_content;
    $f_sc_IterableOnceOps__foreach__F1__V(this$1, f)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionMapNode)) {
      const x2 = $as_sci_HashCollisionMapNode(that);
      if ((this === x2)) {
        return true
      } else if (((this.sci_HashCollisionMapNode__f_hash === x2.sci_HashCollisionMapNode__f_hash) && (this.sci_HashCollisionMapNode__f_content.length__I() === x2.sci_HashCollisionMapNode__f_content.length__I()))) {
        const iter = this.sci_HashCollisionMapNode__f_content.iterator__sc_Iterator();
        while (iter.hasNext__Z()) {
          const x1$2 = $as_T2(iter.next__O());
          if ((x1$2 === null)) {
            throw new $c_s_MatchError(x1$2)
          };
          const key = x1$2.T2__f__1;
          const value = x1$2.T2__f__2;
          const index = x2.indexOf__O__I(key);
          if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, $as_T2(x2.sci_HashCollisionMapNode__f_content.apply__I__O(index)).T2__f__2)))) {
            return false
          }
        };
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionMapNode__f_content.length__I(), this.sci_HashCollisionMapNode__f_hash)
  };
  copy__sci_MapNode() {
    return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_MapNode(index)
  };
}
function $as_sci_HashCollisionMapNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionMapNode"))
}
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionMapNode)))
}
function $asArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionMapNode;", depth))
}
const $d_sci_HashCollisionMapNode = new $TypeData().initClass({
  sci_HashCollisionMapNode: 0
}, false, "scala.collection.immutable.HashCollisionMapNode", {
  sci_HashCollisionMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionMapNode.prototype.$classData = $d_sci_HashCollisionMapNode;
class $c_sci_HashCollisionSetNode extends $c_sci_SetNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionSetNode__f_originalHash = 0;
    this.sci_HashCollisionSetNode__f_hash = 0;
    this.sci_HashCollisionSetNode__f_content = null;
    this.sci_HashCollisionSetNode__f_originalHash = originalHash;
    this.sci_HashCollisionSetNode__f_hash = hash;
    this.sci_HashCollisionSetNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionSetNode__f_content.length__I() >= 2))
  };
  contains__O__I__I__I__Z(element, originalHash, hash, shift) {
    if ((this.sci_HashCollisionSetNode__f_hash === hash)) {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      return $f_sc_SeqOps__contains__O__Z(this$1, element)
    } else {
      return false
    }
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return (this.contains__O__I__I__I__Z(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)))
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    if ((!this.contains__O__I__I__I__Z(element, originalHash, hash, shift))) {
      return this
    } else {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      $m_sci_Vector$();
      const b = new $c_sci_VectorBuilder();
      const it = this$1.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        if (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, element) !== true)) {
          b.addOne__O__sci_VectorBuilder(elem)
        }
      };
      const updatedContent = b.result__sci_Vector();
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [updatedContent.apply__I__O(0)];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.set(i, iterator.next__O());
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionSetNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_SetNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  getPayload__I__O(index) {
    return this.sci_HashCollisionSetNode__f_content.apply__I__O(index)
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionSetNode__f_originalHash
  };
  size__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionSetNode__f_content.length__I(), this.sci_HashCollisionSetNode__f_hash)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionSetNode)) {
      const x2 = $as_sci_HashCollisionSetNode(that);
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if ((this.sci_HashCollisionSetNode__f_hash === x2.sci_HashCollisionSetNode__f_hash)) {
          const this$1 = this.sci_HashCollisionSetNode__f_content;
          const $$x2 = this$1.length__I();
          const this$2 = x2.sci_HashCollisionSetNode__f_content;
          $$x1 = ($$x2 === this$2.length__I())
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const this$3 = this.sci_HashCollisionSetNode__f_content;
          const eta$0$1 = x2.sci_HashCollisionSetNode__f_content;
          let res = true;
          const it = this$3.iterator__sc_Iterator();
          while ((res && it.hasNext__Z())) {
            const arg1 = it.next__O();
            res = $f_sc_SeqOps__contains__O__Z(eta$0$1, arg1)
          };
          return res
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_SetNode() {
    return new $c_sci_HashCollisionSetNode(this.sci_HashCollisionSetNode__f_originalHash, this.sci_HashCollisionSetNode__f_hash, this.sci_HashCollisionSetNode__f_content)
  };
  getNode__I__sci_Node(index) {
    return this.getNode__I__sci_SetNode(index)
  };
}
function $as_sci_HashCollisionSetNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionSetNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionSetNode"))
}
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionSetNode)))
}
function $asArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionSetNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionSetNode;", depth))
}
const $d_sci_HashCollisionSetNode = new $TypeData().initClass({
  sci_HashCollisionSetNode: 0
}, false, "scala.collection.immutable.HashCollisionSetNode", {
  sci_HashCollisionSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionSetNode.prototype.$classData = $d_sci_HashCollisionSetNode;
class $c_sci_HashMap$ extends $c_O {
  constructor() {
    super();
    this.sci_HashMap$__f_EmptyMap = null;
    $n_sci_HashMap$ = this;
    const this$1 = $m_sci_MapNode$();
    this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1.sci_MapNode$__f_EmptyMapNode)
  };
  from__sc_IterableOnce__sci_HashMap(source) {
    if ((source instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(source);
      return x2
    } else {
      const this$1 = new $c_sci_HashMapBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashMapBuilder(source);
      return this$2.result__sci_HashMap()
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_HashMap(it)
  };
}
const $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
let $n_sci_HashMap$ = (void 0);
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
class $c_sci_HashSet$ extends $c_O {
  constructor() {
    super();
    this.sci_HashSet$__f_EmptySet = null;
    $n_sci_HashSet$ = this;
    const this$1 = $m_sci_SetNode$();
    this.sci_HashSet$__f_EmptySet = new $c_sci_HashSet(this$1.sci_SetNode$__f_EmptySetNode)
  };
  from__sc_IterableOnce__sci_HashSet(source) {
    if ((source instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(source);
      return x2
    } else if ((source.knownSize__I() === 0)) {
      return this.sci_HashSet$__f_EmptySet
    } else {
      const this$1 = new $c_sci_HashSetBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashSetBuilder(source);
      return this$2.result__sci_HashSet()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_HashSetBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_HashSet(source)
  };
}
const $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
let $n_sci_HashSet$ = (void 0);
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
class $c_sci_Map$ extends $c_O {
  from__sc_IterableOnce__sci_Map(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      if (x2.isEmpty__Z()) {
        return $m_sci_Map$EmptyMap$()
      }
    };
    if ($is_sci_Map(it)) {
      const x3 = $as_sci_Map(it);
      return x3
    };
    const this$1 = new $c_sci_MapBuilderImpl();
    const this$2 = this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it);
    return this$2.result__sci_Map()
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Map(it)
  };
}
const $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
let $n_sci_Map$ = (void 0);
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
class $c_sci_Set$ extends $c_O {
  from__sc_IterableOnce__sci_Set(it) {
    if ($is_sci_SortedSet(it)) {
      const this$1 = new $c_sci_SetBuilderImpl();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$2.result__sci_Set()
    } else if ((it.knownSize__I() === 0)) {
      return $m_sci_Set$EmptySet$()
    } else if ($is_sci_Set(it)) {
      const x3 = $as_sci_Set(it);
      return x3
    } else {
      const this$3 = new $c_sci_SetBuilderImpl();
      const this$4 = this$3.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$4.result__sci_Set()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_SetBuilderImpl()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Set(source)
  };
}
const $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
let $n_sci_Set$ = (void 0);
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
class $c_s_concurrent_BatchingExecutor$SyncBatch extends $c_s_concurrent_BatchingExecutor$AbstractBatch {
  constructor(outer, runnable) {
    super();
    $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__(this, outer, runnable, $m_s_concurrent_BatchingExecutorStatics$().s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray, 1)
  };
  run__V() {
    while (true) {
      try {
        this.runN__I__V(1024)
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 instanceof $c_jl_InterruptedException)) {
          const x2 = $as_jl_InterruptedException(e$2);
          $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(x2)
        } else if ((e$2 !== null)) {
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(e$2)
          } else {
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          throw e
        }
      };
      if ((this.s_concurrent_BatchingExecutor$AbstractBatch__f_size > 0)) {
        continue
      };
      break
    }
  };
}
function $as_s_concurrent_BatchingExecutor$SyncBatch(obj) {
  return (((obj instanceof $c_s_concurrent_BatchingExecutor$SyncBatch) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.BatchingExecutor$SyncBatch"))
}
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_BatchingExecutor$SyncBatch)))
}
function $asArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (($isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.BatchingExecutor$SyncBatch;", depth))
}
const $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().initClass({
  s_concurrent_BatchingExecutor$SyncBatch: 0
}, false, "scala.concurrent.BatchingExecutor$SyncBatch", {
  s_concurrent_BatchingExecutor$SyncBatch: 1,
  s_concurrent_BatchingExecutor$AbstractBatch: 1,
  O: 1,
  jl_Runnable: 1
});
$c_s_concurrent_BatchingExecutor$SyncBatch.prototype.$classData = $d_s_concurrent_BatchingExecutor$SyncBatch;
class $c_s_concurrent_impl_Promise$Link extends $c_ju_concurrent_atomic_AtomicReference {
  constructor(to) {
    super();
    $ct_ju_concurrent_atomic_AtomicReference__O__(this, to)
  };
  promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(owner) {
    const c = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value);
    let current = c;
    let target = c;
    while (true) {
      const value = target.ju_concurrent_atomic_AtomicReference__f_value;
      if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
        if (this.compareAndSet__O__O__Z(current, target)) {
          return target
        } else {
          current = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value)
        }
      } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
        target = $as_s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_impl_Promise$Link(value).ju_concurrent_atomic_AtomicReference__f_value)
      } else {
        owner.unlink__s_util_Try__V($as_s_util_Try(value));
        return owner
      }
    }
  };
}
function $as_s_concurrent_impl_Promise$Link(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$Link) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Link"))
}
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Link)))
}
function $asArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Link;", depth))
}
const $d_s_concurrent_impl_Promise$Link = new $TypeData().initClass({
  s_concurrent_impl_Promise$Link: 0
}, false, "scala.concurrent.impl.Promise$Link", {
  s_concurrent_impl_Promise$Link: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_concurrent_impl_Promise$Link.prototype.$classData = $d_s_concurrent_impl_Promise$Link;
class $c_s_math_Equiv$ extends $c_O {
}
const $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
let $n_s_math_Equiv$ = (void 0);
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
class $c_s_math_Ordering$ extends $c_O {
}
const $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
let $n_s_math_Ordering$ = (void 0);
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_s_reflect_NoManifest$ extends $c_O {
  toString__T() {
    return "<?>"
  };
}
const $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
let $n_s_reflect_NoManifest$ = (void 0);
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjs_js_Any$ extends $c_O {
  fromFunction0__F0__sjs_js_Function0(f) {
    return ((f$1) => (() => f$1.apply__O()))(f)
  };
}
const $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
let $n_sjs_js_Any$ = (void 0);
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction2 extends $c_sr_AbstractFunction2 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction2__f_f = null;
    this.sjsr_AnonFunction2__f_f = f
  };
}
const $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
class $c_s_util_control_ControlThrowable {
}
function $as_s_util_control_ControlThrowable(obj) {
  return (((obj instanceof $c_s_util_control_ControlThrowable) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"))
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)))
}
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth))
}
class $c_Ldummy$CarPlate extends $c_O {
  constructor(state, serial, area, random) {
    super();
    this.Ldummy$CarPlate__f_state = 0;
    this.Ldummy$CarPlate__f_serial = 0;
    this.Ldummy$CarPlate__f_area = null;
    this.Ldummy$CarPlate__f_random = 0;
    this.Ldummy$CarPlate__f_state = state;
    this.Ldummy$CarPlate__f_serial = serial;
    this.Ldummy$CarPlate__f_area = area;
    this.Ldummy$CarPlate__f_random = random
  };
  concat__T() {
    const $$x6 = $m_Ldummy$();
    const this$1 = this.Ldummy$CarPlate__f_serial;
    const $$x5 = $$x6.translateToPersian__T__T(("" + this$1));
    const $$x4 = $m_Ldummy$().translatePlateArea__T__T(this.Ldummy$CarPlate__f_area);
    const $$x3 = $m_Ldummy$();
    const this$3 = this.Ldummy$CarPlate__f_random;
    const $$x2 = $$x3.translateToPersian__T__T(("" + this$3));
    const $$x1 = $m_Ldummy$();
    const this$5 = this.Ldummy$CarPlate__f_state;
    return ((((((("\u202d" + $$x5) + "\u202d") + $$x4) + "\u202d") + $$x2) + "\u202d \u202d") + $$x1.translateToPersian__T__T(("" + this$5)))
  };
  toJsonString__T() {
    const x = (((((((("{\n        |\"State\": " + this.Ldummy$CarPlate__f_state) + ",\n        |\"Serial\": ") + this.Ldummy$CarPlate__f_serial) + ",\n        |\"Area\": \"") + this.Ldummy$CarPlate__f_area) + "\",\n        |\"Random\": ") + this.Ldummy$CarPlate__f_random) + "\n        |}");
    return $m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124)
  };
  productPrefix__T() {
    return "CarPlate"
  };
  productArity__I() {
    return 4
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$CarPlate__f_state;
        break
      }
      case 1: {
        return this.Ldummy$CarPlate__f_serial;
        break
      }
      case 2: {
        return this.Ldummy$CarPlate__f_area;
        break
      }
      case 3: {
        return this.Ldummy$CarPlate__f_random;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("CarPlate");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Ldummy$CarPlate__f_state;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Ldummy$CarPlate__f_serial;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const x = this.Ldummy$CarPlate__f_area;
    const data$3 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const data$4 = this.Ldummy$CarPlate__f_random;
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$CarPlate)) {
      const CarPlate$1 = $as_Ldummy$CarPlate(x$1);
      return ((((this.Ldummy$CarPlate__f_state === CarPlate$1.Ldummy$CarPlate__f_state) && (this.Ldummy$CarPlate__f_serial === CarPlate$1.Ldummy$CarPlate__f_serial)) && (this.Ldummy$CarPlate__f_random === CarPlate$1.Ldummy$CarPlate__f_random)) && (this.Ldummy$CarPlate__f_area === CarPlate$1.Ldummy$CarPlate__f_area))
    } else {
      return false
    }
  };
}
function $as_Ldummy$CarPlate(obj) {
  return (((obj instanceof $c_Ldummy$CarPlate) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$CarPlate"))
}
function $isArrayOf_Ldummy$CarPlate(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$CarPlate)))
}
function $asArrayOf_Ldummy$CarPlate(obj, depth) {
  return (($isArrayOf_Ldummy$CarPlate(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$CarPlate;", depth))
}
const $d_Ldummy$CarPlate = new $TypeData().initClass({
  Ldummy$CarPlate: 0
}, false, "dummy$CarPlate", {
  Ldummy$CarPlate: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$CarPlate.prototype.$classData = $d_Ldummy$CarPlate;
class $c_Ldummy$Date extends $c_O {
  constructor(year, month, day) {
    super();
    this.Ldummy$Date__f_year = null;
    this.Ldummy$Date__f_month = null;
    this.Ldummy$Date__f_day = null;
    this.Ldummy$Date__f_year = year;
    this.Ldummy$Date__f_month = month;
    this.Ldummy$Date__f_day = day
  };
  concat__T() {
    const $$x5 = $m_sc_StringOps$();
    const x = ("0000" + this.Ldummy$Date__f_year);
    const $$x4 = $$x5.takeRight$extension__T__I__T(x, 4);
    const $$x3 = $m_sc_StringOps$();
    const x$1 = ("00" + this.Ldummy$Date__f_month);
    const $$x2 = $$x3.takeRight$extension__T__I__T(x$1, 2);
    const $$x1 = $m_sc_StringOps$();
    const x$2 = ("00" + this.Ldummy$Date__f_day);
    return (((($$x4 + "/") + $$x2) + "/") + $$x1.takeRight$extension__T__I__T(x$2, 2))
  };
  toJsonString__T() {
    const x = (((((("{\n        |\"Year\": " + $f_T__replaceFirst__T__T__T(this.Ldummy$Date__f_year, "^0+(?!$)", "")) + ",\n        |\"Month\": ") + $f_T__replaceFirst__T__T__T(this.Ldummy$Date__f_month, "^0+(?!$)", "")) + ",\n        |\"Day\": ") + $f_T__replaceFirst__T__T__T(this.Ldummy$Date__f_day, "^0+(?!$)", "")) + "\n        |}");
    return $m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124)
  };
  productPrefix__T() {
    return "Date"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$Date__f_year;
        break
      }
      case 1: {
        return this.Ldummy$Date__f_month;
        break
      }
      case 2: {
        return this.Ldummy$Date__f_day;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$Date)) {
      const Date$1 = $as_Ldummy$Date(x$1);
      return (((this.Ldummy$Date__f_year === Date$1.Ldummy$Date__f_year) && (this.Ldummy$Date__f_month === Date$1.Ldummy$Date__f_month)) && (this.Ldummy$Date__f_day === Date$1.Ldummy$Date__f_day))
    } else {
      return false
    }
  };
}
function $as_Ldummy$Date(obj) {
  return (((obj instanceof $c_Ldummy$Date) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$Date"))
}
function $isArrayOf_Ldummy$Date(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$Date)))
}
function $asArrayOf_Ldummy$Date(obj, depth) {
  return (($isArrayOf_Ldummy$Date(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$Date;", depth))
}
const $d_Ldummy$Date = new $TypeData().initClass({
  Ldummy$Date: 0
}, false, "dummy$Date", {
  Ldummy$Date: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$Date.prototype.$classData = $d_Ldummy$Date;
class $c_Ldummy$DispatchingForm extends $c_O {
  constructor(goodsOwner, number, date, partNumber, truck, draftDate, draftNumber, draftOwner, itemsList, comments, assignee, inJsonString) {
    super();
    this.Ldummy$DispatchingForm__f_goodsOwner = null;
    this.Ldummy$DispatchingForm__f_number = 0;
    this.Ldummy$DispatchingForm__f_date = null;
    this.Ldummy$DispatchingForm__f_partNumber = 0;
    this.Ldummy$DispatchingForm__f_truck = null;
    this.Ldummy$DispatchingForm__f_draftDate = null;
    this.Ldummy$DispatchingForm__f_draftNumber = null;
    this.Ldummy$DispatchingForm__f_draftOwner = null;
    this.Ldummy$DispatchingForm__f_itemsList = null;
    this.Ldummy$DispatchingForm__f_comments = null;
    this.Ldummy$DispatchingForm__f_assignee = null;
    this.Ldummy$DispatchingForm__f_inJsonString = null;
    this.Ldummy$DispatchingForm__f_goodsOwner = goodsOwner;
    this.Ldummy$DispatchingForm__f_number = number;
    this.Ldummy$DispatchingForm__f_date = date;
    this.Ldummy$DispatchingForm__f_partNumber = partNumber;
    this.Ldummy$DispatchingForm__f_truck = truck;
    this.Ldummy$DispatchingForm__f_draftDate = draftDate;
    this.Ldummy$DispatchingForm__f_draftNumber = draftNumber;
    this.Ldummy$DispatchingForm__f_draftOwner = draftOwner;
    this.Ldummy$DispatchingForm__f_itemsList = itemsList;
    this.Ldummy$DispatchingForm__f_comments = comments;
    this.Ldummy$DispatchingForm__f_assignee = assignee;
    this.Ldummy$DispatchingForm__f_inJsonString = inJsonString
  };
  productPrefix__T() {
    return "DispatchingForm"
  };
  productArity__I() {
    return 12
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$DispatchingForm__f_goodsOwner;
        break
      }
      case 1: {
        return this.Ldummy$DispatchingForm__f_number;
        break
      }
      case 2: {
        return this.Ldummy$DispatchingForm__f_date;
        break
      }
      case 3: {
        return this.Ldummy$DispatchingForm__f_partNumber;
        break
      }
      case 4: {
        return this.Ldummy$DispatchingForm__f_truck;
        break
      }
      case 5: {
        return this.Ldummy$DispatchingForm__f_draftDate;
        break
      }
      case 6: {
        return this.Ldummy$DispatchingForm__f_draftNumber;
        break
      }
      case 7: {
        return this.Ldummy$DispatchingForm__f_draftOwner;
        break
      }
      case 8: {
        return this.Ldummy$DispatchingForm__f_itemsList;
        break
      }
      case 9: {
        return this.Ldummy$DispatchingForm__f_comments;
        break
      }
      case 10: {
        return this.Ldummy$DispatchingForm__f_assignee;
        break
      }
      case 11: {
        return this.Ldummy$DispatchingForm__f_inJsonString;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("DispatchingForm");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Ldummy$DispatchingForm__f_goodsOwner;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Ldummy$DispatchingForm__f_number;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const x$1 = this.Ldummy$DispatchingForm__f_date;
    const data$3 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const data$4 = this.Ldummy$DispatchingForm__f_partNumber;
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    const x$2 = this.Ldummy$DispatchingForm__f_truck;
    const data$5 = $m_sr_Statics$().anyHash__O__I(x$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
    const hash$6 = acc;
    const x$3 = this.Ldummy$DispatchingForm__f_draftDate;
    const data$6 = $m_sr_Statics$().anyHash__O__I(x$3);
    acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$6);
    const hash$7 = acc;
    const x$4 = this.Ldummy$DispatchingForm__f_draftNumber;
    const data$7 = $m_sr_Statics$().anyHash__O__I(x$4);
    acc = $m_sr_Statics$().mix__I__I__I(hash$7, data$7);
    const hash$8 = acc;
    const x$5 = this.Ldummy$DispatchingForm__f_draftOwner;
    const data$8 = $m_sr_Statics$().anyHash__O__I(x$5);
    acc = $m_sr_Statics$().mix__I__I__I(hash$8, data$8);
    const hash$9 = acc;
    const x$6 = this.Ldummy$DispatchingForm__f_itemsList;
    const data$9 = $m_sr_Statics$().anyHash__O__I(x$6);
    acc = $m_sr_Statics$().mix__I__I__I(hash$9, data$9);
    const hash$10 = acc;
    const x$7 = this.Ldummy$DispatchingForm__f_comments;
    const data$10 = $m_sr_Statics$().anyHash__O__I(x$7);
    acc = $m_sr_Statics$().mix__I__I__I(hash$10, data$10);
    const hash$11 = acc;
    const x$8 = this.Ldummy$DispatchingForm__f_assignee;
    const data$11 = $m_sr_Statics$().anyHash__O__I(x$8);
    acc = $m_sr_Statics$().mix__I__I__I(hash$11, data$11);
    const hash$12 = acc;
    const x$9 = this.Ldummy$DispatchingForm__f_inJsonString;
    const data$12 = $m_sr_Statics$().anyHash__O__I(x$9);
    acc = $m_sr_Statics$().mix__I__I__I(hash$12, data$12);
    const hash$13 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$13, 12)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$DispatchingForm)) {
      const DispatchingForm$1 = $as_Ldummy$DispatchingForm(x$1);
      let $$x7;
      if (((this.Ldummy$DispatchingForm__f_number === DispatchingForm$1.Ldummy$DispatchingForm__f_number) && (this.Ldummy$DispatchingForm__f_partNumber === DispatchingForm$1.Ldummy$DispatchingForm__f_partNumber))) {
        const x = this.Ldummy$DispatchingForm__f_goodsOwner;
        const x$2 = DispatchingForm$1.Ldummy$DispatchingForm__f_goodsOwner;
        $$x7 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x7 = false
      };
      let $$x6;
      if ($$x7) {
        const x$3 = this.Ldummy$DispatchingForm__f_date;
        const x$4 = DispatchingForm$1.Ldummy$DispatchingForm__f_date;
        $$x6 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        $$x6 = false
      };
      let $$x5;
      if ($$x6) {
        const x$5 = this.Ldummy$DispatchingForm__f_truck;
        const x$6 = DispatchingForm$1.Ldummy$DispatchingForm__f_truck;
        $$x5 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        $$x5 = false
      };
      let $$x4;
      if ($$x5) {
        const x$7 = this.Ldummy$DispatchingForm__f_draftDate;
        const x$8 = DispatchingForm$1.Ldummy$DispatchingForm__f_draftDate;
        $$x4 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
      } else {
        $$x4 = false
      };
      let $$x3;
      if (($$x4 && (this.Ldummy$DispatchingForm__f_draftNumber === DispatchingForm$1.Ldummy$DispatchingForm__f_draftNumber))) {
        const x$9 = this.Ldummy$DispatchingForm__f_draftOwner;
        const x$10 = DispatchingForm$1.Ldummy$DispatchingForm__f_draftOwner;
        $$x3 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
      } else {
        $$x3 = false
      };
      let $$x2;
      if ($$x3) {
        const x$11 = this.Ldummy$DispatchingForm__f_itemsList;
        const x$12 = DispatchingForm$1.Ldummy$DispatchingForm__f_itemsList;
        $$x2 = ((x$11 === null) ? (x$12 === null) : x$11.equals__O__Z(x$12))
      } else {
        $$x2 = false
      };
      let $$x1;
      if (($$x2 && (this.Ldummy$DispatchingForm__f_comments === DispatchingForm$1.Ldummy$DispatchingForm__f_comments))) {
        const x$13 = this.Ldummy$DispatchingForm__f_assignee;
        const x$14 = DispatchingForm$1.Ldummy$DispatchingForm__f_assignee;
        $$x1 = ((x$13 === null) ? (x$14 === null) : x$13.equals__O__Z(x$14))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        return (this.Ldummy$DispatchingForm__f_inJsonString === DispatchingForm$1.Ldummy$DispatchingForm__f_inJsonString)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Ldummy$DispatchingForm(obj) {
  return (((obj instanceof $c_Ldummy$DispatchingForm) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$DispatchingForm"))
}
function $isArrayOf_Ldummy$DispatchingForm(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$DispatchingForm)))
}
function $asArrayOf_Ldummy$DispatchingForm(obj, depth) {
  return (($isArrayOf_Ldummy$DispatchingForm(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$DispatchingForm;", depth))
}
const $d_Ldummy$DispatchingForm = new $TypeData().initClass({
  Ldummy$DispatchingForm: 0
}, false, "dummy$DispatchingForm", {
  Ldummy$DispatchingForm: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$DispatchingForm.prototype.$classData = $d_Ldummy$DispatchingForm;
class $c_Ldummy$Item extends $c_O {
  constructor(description, quantity, unitOfMeasurement, grossWeight, packageWeight, netWeight) {
    super();
    this.Ldummy$Item__f_description = null;
    this.Ldummy$Item__f_quantity = 0;
    this.Ldummy$Item__f_unitOfMeasurement = null;
    this.Ldummy$Item__f_grossWeight = 0.0;
    this.Ldummy$Item__f_packageWeight = 0.0;
    this.Ldummy$Item__f_netWeight = 0.0;
    this.Ldummy$Item__f_description = description;
    this.Ldummy$Item__f_quantity = quantity;
    this.Ldummy$Item__f_unitOfMeasurement = unitOfMeasurement;
    this.Ldummy$Item__f_grossWeight = grossWeight;
    this.Ldummy$Item__f_packageWeight = packageWeight;
    this.Ldummy$Item__f_netWeight = netWeight
  };
  toJsonString__T() {
    const x = (((((((((((("{\n        |\"Description\": \"" + this.Ldummy$Item__f_description) + "\",\n        |\"Quantity\": ") + this.Ldummy$Item__f_quantity) + ",\n        |\"UnitOfMeasurement\": \"") + this.Ldummy$Item__f_unitOfMeasurement) + "\",\n        |\"GrossWeight\": ") + this.Ldummy$Item__f_grossWeight) + ",\n        |\"PackageWeight\": ") + this.Ldummy$Item__f_packageWeight) + ",\n        |\"NetWeight\": ") + this.Ldummy$Item__f_netWeight) + "\n        |}");
    return $m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124)
  };
  productPrefix__T() {
    return "Item"
  };
  productArity__I() {
    return 6
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$Item__f_description;
        break
      }
      case 1: {
        return this.Ldummy$Item__f_quantity;
        break
      }
      case 2: {
        return this.Ldummy$Item__f_unitOfMeasurement;
        break
      }
      case 3: {
        return this.Ldummy$Item__f_grossWeight;
        break
      }
      case 4: {
        return this.Ldummy$Item__f_packageWeight;
        break
      }
      case 5: {
        return this.Ldummy$Item__f_netWeight;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("Item");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Ldummy$Item__f_description;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Ldummy$Item__f_quantity;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const x$1 = this.Ldummy$Item__f_unitOfMeasurement;
    const data$3 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const dv = this.Ldummy$Item__f_grossWeight;
    const data$4 = $m_sr_Statics$().doubleHash__D__I(dv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    const dv$1 = this.Ldummy$Item__f_packageWeight;
    const data$5 = $m_sr_Statics$().doubleHash__D__I(dv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
    const hash$6 = acc;
    const dv$2 = this.Ldummy$Item__f_netWeight;
    const data$6 = $m_sr_Statics$().doubleHash__D__I(dv$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$6);
    const hash$7 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$7, 6)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$Item)) {
      const Item$1 = $as_Ldummy$Item(x$1);
      return ((((((this.Ldummy$Item__f_quantity === Item$1.Ldummy$Item__f_quantity) && (this.Ldummy$Item__f_grossWeight === Item$1.Ldummy$Item__f_grossWeight)) && (this.Ldummy$Item__f_packageWeight === Item$1.Ldummy$Item__f_packageWeight)) && (this.Ldummy$Item__f_netWeight === Item$1.Ldummy$Item__f_netWeight)) && (this.Ldummy$Item__f_description === Item$1.Ldummy$Item__f_description)) && (this.Ldummy$Item__f_unitOfMeasurement === Item$1.Ldummy$Item__f_unitOfMeasurement))
    } else {
      return false
    }
  };
}
function $as_Ldummy$Item(obj) {
  return (((obj instanceof $c_Ldummy$Item) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$Item"))
}
function $isArrayOf_Ldummy$Item(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$Item)))
}
function $asArrayOf_Ldummy$Item(obj, depth) {
  return (($isArrayOf_Ldummy$Item(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$Item;", depth))
}
const $d_Ldummy$Item = new $TypeData().initClass({
  Ldummy$Item: 0
}, false, "dummy$Item", {
  Ldummy$Item: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$Item.prototype.$classData = $d_Ldummy$Item;
class $c_Ldummy$ItemsList extends $c_O {
  constructor(items) {
    super();
    this.Ldummy$ItemsList__f_items = null;
    this.Ldummy$ItemsList__f_items = items
  };
  toJsonString__T() {
    const this$2 = this.Ldummy$ItemsList__f_items;
    const f = ((this$1) => ((x$2) => {
      const x = $as_Ldummy$Item(x$2);
      return x.toJsonString__T()
    }))(this);
    let this$3;
    if ((this$2 === $m_sci_Nil$())) {
      this$3 = $m_sci_Nil$()
    } else {
      const arg1 = this$2.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = $as_sci_List(this$2.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      this$3 = h
    };
    const it = this$3.iterator__sc_Iterator();
    if ((!it.hasNext__Z())) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.reduceLeft")
    };
    let first = true;
    let acc = 0;
    while (it.hasNext__Z()) {
      const x$1 = it.next__O();
      if (first) {
        acc = x$1;
        first = false
      } else {
        const arg1$2 = acc;
        const y = $as_T(arg1$2);
        const z = $as_T(x$1);
        acc = ((y + ", ") + z)
      }
    };
    const this$4 = $as_T(acc);
    const x$3 = (("[\n        |" + this$4) + "\n        |]");
    return $m_sc_StringOps$().stripMargin$extension__T__C__T(x$3, 124)
  };
  productPrefix__T() {
    return "ItemsList"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Ldummy$ItemsList__f_items : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$ItemsList)) {
      const ItemsList$1 = $as_Ldummy$ItemsList(x$1);
      const x = this.Ldummy$ItemsList__f_items;
      const x$2 = ItemsList$1.Ldummy$ItemsList__f_items;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  };
}
function $as_Ldummy$ItemsList(obj) {
  return (((obj instanceof $c_Ldummy$ItemsList) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$ItemsList"))
}
function $isArrayOf_Ldummy$ItemsList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$ItemsList)))
}
function $asArrayOf_Ldummy$ItemsList(obj, depth) {
  return (($isArrayOf_Ldummy$ItemsList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$ItemsList;", depth))
}
const $d_Ldummy$ItemsList = new $TypeData().initClass({
  Ldummy$ItemsList: 0
}, false, "dummy$ItemsList", {
  Ldummy$ItemsList: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$ItemsList.prototype.$classData = $d_Ldummy$ItemsList;
class $c_Ldummy$Person extends $c_O {
  constructor(firstName, surName, nationalIDNo) {
    super();
    this.Ldummy$Person__f_firstName = null;
    this.Ldummy$Person__f_surName = null;
    this.Ldummy$Person__f_nationalIDNo = null;
    this.Ldummy$Person__f_firstName = firstName;
    this.Ldummy$Person__f_surName = surName;
    this.Ldummy$Person__f_nationalIDNo = nationalIDNo
  };
  toJsonString__T() {
    const x = (((((("{\n        |\"FirstName\": \"" + this.Ldummy$Person__f_firstName) + "\",\n        |\"SurName\": \"") + this.Ldummy$Person__f_surName) + "\",\n        |\"NationalIDNo\": \"") + this.Ldummy$Person__f_nationalIDNo) + "\"\n        |}");
    return $m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124)
  };
  productPrefix__T() {
    return "Person"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$Person__f_firstName;
        break
      }
      case 1: {
        return this.Ldummy$Person__f_surName;
        break
      }
      case 2: {
        return this.Ldummy$Person__f_nationalIDNo;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$Person)) {
      const Person$1 = $as_Ldummy$Person(x$1);
      return (((this.Ldummy$Person__f_firstName === Person$1.Ldummy$Person__f_firstName) && (this.Ldummy$Person__f_surName === Person$1.Ldummy$Person__f_surName)) && (this.Ldummy$Person__f_nationalIDNo === Person$1.Ldummy$Person__f_nationalIDNo))
    } else {
      return false
    }
  };
}
function $as_Ldummy$Person(obj) {
  return (((obj instanceof $c_Ldummy$Person) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$Person"))
}
function $isArrayOf_Ldummy$Person(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$Person)))
}
function $asArrayOf_Ldummy$Person(obj, depth) {
  return (($isArrayOf_Ldummy$Person(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$Person;", depth))
}
const $d_Ldummy$Person = new $TypeData().initClass({
  Ldummy$Person: 0
}, false, "dummy$Person", {
  Ldummy$Person: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$Person.prototype.$classData = $d_Ldummy$Person;
class $c_Ldummy$ReceivingForm extends $c_O {
  constructor(goodsOwner, number, date, partNumber, truck, billOfLading, origin, itemsList, comments, representative, inJsonString) {
    super();
    this.Ldummy$ReceivingForm__f_goodsOwner = null;
    this.Ldummy$ReceivingForm__f_number = 0;
    this.Ldummy$ReceivingForm__f_date = null;
    this.Ldummy$ReceivingForm__f_partNumber = 0;
    this.Ldummy$ReceivingForm__f_truck = null;
    this.Ldummy$ReceivingForm__f_billOfLading = null;
    this.Ldummy$ReceivingForm__f_origin = null;
    this.Ldummy$ReceivingForm__f_itemsList = null;
    this.Ldummy$ReceivingForm__f_comments = null;
    this.Ldummy$ReceivingForm__f_representative = null;
    this.Ldummy$ReceivingForm__f_inJsonString = null;
    this.Ldummy$ReceivingForm__f_goodsOwner = goodsOwner;
    this.Ldummy$ReceivingForm__f_number = number;
    this.Ldummy$ReceivingForm__f_date = date;
    this.Ldummy$ReceivingForm__f_partNumber = partNumber;
    this.Ldummy$ReceivingForm__f_truck = truck;
    this.Ldummy$ReceivingForm__f_billOfLading = billOfLading;
    this.Ldummy$ReceivingForm__f_origin = origin;
    this.Ldummy$ReceivingForm__f_itemsList = itemsList;
    this.Ldummy$ReceivingForm__f_comments = comments;
    this.Ldummy$ReceivingForm__f_representative = representative;
    this.Ldummy$ReceivingForm__f_inJsonString = inJsonString
  };
  productPrefix__T() {
    return "ReceivingForm"
  };
  productArity__I() {
    return 11
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Ldummy$ReceivingForm__f_goodsOwner;
        break
      }
      case 1: {
        return this.Ldummy$ReceivingForm__f_number;
        break
      }
      case 2: {
        return this.Ldummy$ReceivingForm__f_date;
        break
      }
      case 3: {
        return this.Ldummy$ReceivingForm__f_partNumber;
        break
      }
      case 4: {
        return this.Ldummy$ReceivingForm__f_truck;
        break
      }
      case 5: {
        return this.Ldummy$ReceivingForm__f_billOfLading;
        break
      }
      case 6: {
        return this.Ldummy$ReceivingForm__f_origin;
        break
      }
      case 7: {
        return this.Ldummy$ReceivingForm__f_itemsList;
        break
      }
      case 8: {
        return this.Ldummy$ReceivingForm__f_comments;
        break
      }
      case 9: {
        return this.Ldummy$ReceivingForm__f_representative;
        break
      }
      case 10: {
        return this.Ldummy$ReceivingForm__f_inJsonString;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("ReceivingForm");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Ldummy$ReceivingForm__f_goodsOwner;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Ldummy$ReceivingForm__f_number;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const x$1 = this.Ldummy$ReceivingForm__f_date;
    const data$3 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const data$4 = this.Ldummy$ReceivingForm__f_partNumber;
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    const x$2 = this.Ldummy$ReceivingForm__f_truck;
    const data$5 = $m_sr_Statics$().anyHash__O__I(x$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
    const hash$6 = acc;
    const x$3 = this.Ldummy$ReceivingForm__f_billOfLading;
    const data$6 = $m_sr_Statics$().anyHash__O__I(x$3);
    acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$6);
    const hash$7 = acc;
    const x$4 = this.Ldummy$ReceivingForm__f_origin;
    const data$7 = $m_sr_Statics$().anyHash__O__I(x$4);
    acc = $m_sr_Statics$().mix__I__I__I(hash$7, data$7);
    const hash$8 = acc;
    const x$5 = this.Ldummy$ReceivingForm__f_itemsList;
    const data$8 = $m_sr_Statics$().anyHash__O__I(x$5);
    acc = $m_sr_Statics$().mix__I__I__I(hash$8, data$8);
    const hash$9 = acc;
    const x$6 = this.Ldummy$ReceivingForm__f_comments;
    const data$9 = $m_sr_Statics$().anyHash__O__I(x$6);
    acc = $m_sr_Statics$().mix__I__I__I(hash$9, data$9);
    const hash$10 = acc;
    const x$7 = this.Ldummy$ReceivingForm__f_representative;
    const data$10 = $m_sr_Statics$().anyHash__O__I(x$7);
    acc = $m_sr_Statics$().mix__I__I__I(hash$10, data$10);
    const hash$11 = acc;
    const x$8 = this.Ldummy$ReceivingForm__f_inJsonString;
    const data$11 = $m_sr_Statics$().anyHash__O__I(x$8);
    acc = $m_sr_Statics$().mix__I__I__I(hash$11, data$11);
    const hash$12 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$12, 11)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Ldummy$ReceivingForm)) {
      const ReceivingForm$1 = $as_Ldummy$ReceivingForm(x$1);
      let $$x5;
      if (((this.Ldummy$ReceivingForm__f_number === ReceivingForm$1.Ldummy$ReceivingForm__f_number) && (this.Ldummy$ReceivingForm__f_partNumber === ReceivingForm$1.Ldummy$ReceivingForm__f_partNumber))) {
        const x = this.Ldummy$ReceivingForm__f_goodsOwner;
        const x$2 = ReceivingForm$1.Ldummy$ReceivingForm__f_goodsOwner;
        $$x5 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x5 = false
      };
      let $$x4;
      if ($$x5) {
        const x$3 = this.Ldummy$ReceivingForm__f_date;
        const x$4 = ReceivingForm$1.Ldummy$ReceivingForm__f_date;
        $$x4 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        $$x4 = false
      };
      let $$x3;
      if ($$x4) {
        const x$5 = this.Ldummy$ReceivingForm__f_truck;
        const x$6 = ReceivingForm$1.Ldummy$ReceivingForm__f_truck;
        $$x3 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        $$x3 = false
      };
      let $$x2;
      if ((($$x3 && (this.Ldummy$ReceivingForm__f_billOfLading === ReceivingForm$1.Ldummy$ReceivingForm__f_billOfLading)) && (this.Ldummy$ReceivingForm__f_origin === ReceivingForm$1.Ldummy$ReceivingForm__f_origin))) {
        const x$7 = this.Ldummy$ReceivingForm__f_itemsList;
        const x$8 = ReceivingForm$1.Ldummy$ReceivingForm__f_itemsList;
        $$x2 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
      } else {
        $$x2 = false
      };
      let $$x1;
      if (($$x2 && (this.Ldummy$ReceivingForm__f_comments === ReceivingForm$1.Ldummy$ReceivingForm__f_comments))) {
        const x$9 = this.Ldummy$ReceivingForm__f_representative;
        const x$10 = ReceivingForm$1.Ldummy$ReceivingForm__f_representative;
        $$x1 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        return (this.Ldummy$ReceivingForm__f_inJsonString === ReceivingForm$1.Ldummy$ReceivingForm__f_inJsonString)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Ldummy$ReceivingForm(obj) {
  return (((obj instanceof $c_Ldummy$ReceivingForm) || (obj === null)) ? obj : $throwClassCastException(obj, "dummy$ReceivingForm"))
}
function $isArrayOf_Ldummy$ReceivingForm(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ldummy$ReceivingForm)))
}
function $asArrayOf_Ldummy$ReceivingForm(obj, depth) {
  return (($isArrayOf_Ldummy$ReceivingForm(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ldummy$ReceivingForm;", depth))
}
const $d_Ldummy$ReceivingForm = new $TypeData().initClass({
  Ldummy$ReceivingForm: 0
}, false, "dummy$ReceivingForm", {
  Ldummy$ReceivingForm: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ldummy$ReceivingForm.prototype.$classData = $d_Ldummy$ReceivingForm;
class $c_Ljava_io_OutputStream extends $c_O {
}
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"))
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)))
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth))
}
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
class $c_jl_InterruptedException {
}
function $as_jl_InterruptedException(obj) {
  return (((obj instanceof $c_jl_InterruptedException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"))
}
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)))
}
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth))
}
class $c_jl_LinkageError {
}
function $as_jl_LinkageError(obj) {
  return (((obj instanceof $c_jl_LinkageError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"))
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)))
}
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth))
}
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__replaceFirst__T__T__T = (function($thiz, regex, replacement) {
  const this$1 = $m_ju_regex_Pattern$();
  const this$2 = this$1.compile__T__I__ju_regex_Pattern(regex, 0);
  return new $c_ju_regex_Matcher(this$2, $thiz, 0, $uI($thiz.length)).replaceFirst__T__T(replacement)
});
const $f_T__split__T__I__AT = (function($thiz, regex, limit) {
  const this$1 = $m_ju_regex_Pattern$();
  return this$1.compile__T__I__ju_regex_Pattern(regex, 0).split__jl_CharSequence__I__AT($thiz, limit)
});
const $f_T__subSequence__I__I__jl_CharSequence = (function($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuffer__jl_StringBuilder__ = (function($thiz, builder) {
  $thiz.jl_StringBuffer__f_builder = builder;
  return $thiz
});
const $ct_jl_StringBuffer__ = (function($thiz) {
  $ct_jl_StringBuffer__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_jl_StringBuffer extends $c_O {
  constructor() {
    super();
    this.jl_StringBuffer__f_builder = null
  };
  append__T__jl_StringBuffer(str) {
    const this$1 = this.jl_StringBuffer__f_builder;
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  append__C__jl_StringBuffer(c) {
    const this$1 = this.jl_StringBuffer__f_builder;
    const str = $as_T(String.fromCharCode(c));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    const this$1 = this.jl_StringBuffer__f_builder;
    return this$1.substring__I__I__T(start, end)
  };
  toString__T() {
    return this.jl_StringBuffer__f_builder.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
}
const $d_jl_StringBuffer = new $TypeData().initClass({
  jl_StringBuffer: 0
}, false, "java.lang.StringBuffer", {
  jl_StringBuffer: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuffer.prototype.$classData = $d_jl_StringBuffer;
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException())
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
const $ct_jl_StringBuilder__I__ = (function($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.substring__I__I__T(start, end)
  };
  substring__I__I__T(start, end) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $as_T(this$1.substring(start, end))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_ThreadDeath {
}
function $as_jl_ThreadDeath(obj) {
  return (((obj instanceof $c_jl_ThreadDeath) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"))
}
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)))
}
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth))
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"))
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)))
}
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth))
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_ju_concurrent_ExecutionException = new $TypeData().initClass({
  ju_concurrent_ExecutionException: 0
}, false, "java.util.concurrent.ExecutionException", {
  ju_concurrent_ExecutionException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ExecutionException.prototype.$classData = $d_ju_concurrent_ExecutionException;
class $c_Lorg_scalajs_dom_ext_EasySeq$$anon$1 extends $c_O {
  constructor(outer) {
    super();
    this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index = 0;
    this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_$outer = outer
    };
    this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hasNext__Z() {
    return (this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index < this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_$outer.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsLength)
  };
  next__O() {
    const res = this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_$outer.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsApply.apply__O__O(this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index);
    this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index = ((1 + this.Lorg_scalajs_dom_ext_EasySeq$$anon$1__f_index) | 0);
    return res
  };
}
const $d_Lorg_scalajs_dom_ext_EasySeq$$anon$1 = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_EasySeq$$anon$1: 0
}, false, "org.scalajs.dom.ext.EasySeq$$anon$1", {
  Lorg_scalajs_dom_ext_EasySeq$$anon$1: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_Lorg_scalajs_dom_ext_EasySeq$$anon$1.prototype.$classData = $d_Lorg_scalajs_dom_ext_EasySeq$$anon$1;
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
class $c_sc_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
  };
}
const $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
let $n_sc_Iterable$ = (void 0);
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
class $c_sc_Map$ extends $c_sc_MapFactory$Delegate {
  constructor() {
    super();
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = null;
    $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
    $n_sc_Map$ = this;
    this.sc_Map$__f_scala$collection$Map$$DefaultSentinel = $ct_O__(new $c_O())
  };
}
const $d_sc_Map$ = new $TypeData().initClass({
  sc_Map$: 0
}, false, "scala.collection.Map$", {
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Map$.prototype.$classData = $d_sc_Map$;
let $n_sc_Map$ = (void 0);
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$()
  };
  return $n_sc_Map$
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
  };
  newBuilder__scm_Builder() {
    return this.sc_SeqFactory$Delegate__f_delegate.newBuilder__scm_Builder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
}
const $f_sc_SeqOps__isDefinedAt__I__Z = (function($thiz, idx) {
  return ((idx >= 0) && (idx < $thiz.length__I()))
});
const $f_sc_SeqOps__indexOf__O__I__I = (function($thiz, elem, from) {
  return $thiz.indexWhere__F1__I__I(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$1$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(elem$1, x$1$2)))($thiz, elem)), from)
});
const $f_sc_SeqOps__contains__O__Z = (function($thiz, elem) {
  return $thiz.exists__F1__Z(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$3$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(x$3$2, elem$1)))($thiz, elem)))
});
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
const $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O = (function($thiz, that) {
  const b = $thiz.iterableFactory__sc_IterableFactory().newBuilder__scm_Builder();
  const it1 = $thiz.iterator__sc_Iterator();
  const it2 = that.iterator__sc_Iterator();
  while ((it1.hasNext__Z() && it2.hasNext__Z())) {
    const elem = new $c_T2(it1.next__O(), it2.next__O());
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O()
});
class $c_sci_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Iterable(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = $as_sci_Iterable(it);
      return x2
    } else {
      return $as_sci_Iterable($c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it))
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Iterable(it)
  };
}
const $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
let $n_sci_Iterable$ = (void 0);
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = $as_sci_LazyList(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1, suffix$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it$1, suffix$1)))(this, it, suffix));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $as_sci_LazyList$State(suffix.apply__O())
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_sci_LazyList$LazyBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_Stream$ extends $c_O {
  from__sc_IterableOnce__sci_Stream(coll) {
    if ((coll instanceof $c_sci_Stream)) {
      const x2 = $as_sci_Stream(coll);
      return x2
    } else {
      return this.fromIterator__sc_Iterator__sci_Stream(coll.iterator__sc_Iterator())
    }
  };
  fromIterator__sc_Iterator__sci_Stream(it) {
    return (it.hasNext__Z() ? new $c_sci_Stream$Cons(it.next__O(), new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_Stream$().fromIterator__sc_Iterator__sci_Stream(it$1)))(this, it))) : $m_sci_Stream$Empty$())
  };
  newBuilder__scm_Builder() {
    const this$3 = new $c_scm_ArrayBuffer$$anon$1();
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((array$2) => {
      const array = $as_scm_ArrayBuffer(array$2);
      return $m_sci_Stream$().from__sc_IterableOnce__sci_Stream(array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$3, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Stream(source)
  };
}
const $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
let $n_sci_Stream$ = (void 0);
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return $as_sci_WrappedString(b.result__O())
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_T(x$2);
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
const $ct_scm_GrowableBuilder__scm_Growable__ = (function($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz
});
class $c_scm_GrowableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_GrowableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addOne__O__scm_GrowableBuilder(elem) {
    const this$1 = this.scm_GrowableBuilder__f_elems;
    this$1.addOne__O__scm_Growable(elem);
    return this
  };
  addAll__sc_IterableOnce__scm_GrowableBuilder(xs) {
    this.scm_GrowableBuilder__f_elems.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_GrowableBuilder(elem)
  };
  result__O() {
    return this.scm_GrowableBuilder__f_elems
  };
}
const $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$4 = new $TypeData().initClass({
  s_concurrent_Future$$anon$4: 0
}, false, "scala.concurrent.Future$$anon$4", {
  s_concurrent_Future$$anon$4: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$4.prototype.$classData = $d_s_concurrent_Future$$anon$4;
class $c_sr_NonLocalReturnControl {
}
function $as_sr_NonLocalReturnControl(obj) {
  return (((obj instanceof $c_sr_NonLocalReturnControl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.runtime.NonLocalReturnControl"))
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sr_NonLocalReturnControl)))
}
function $asArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (($isArrayOf_sr_NonLocalReturnControl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.runtime.NonLocalReturnControl;", depth))
}
class $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext extends $c_O {
  constructor() {
    super();
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = null;
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = Promise.resolve((void 0))
  };
  execute__jl_Runnable__V(runnable) {
    this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise.then(((arg$outer, runnable$2) => ((arg1$2) => {
      const arg1 = $as_jl_Void(arg1$2);
      return arg$outer.scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(arg1, runnable$2)
    }))(this, runnable))
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
  scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(x$1, runnable$2) {
    try {
      runnable$2.run__V()
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
      } else {
        throw e
      }
    }
  };
}
const $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", {
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
class $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext extends $c_O {
  execute__jl_Runnable__V(runnable) {
    setTimeout($m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $c_sjsr_AnonFunction0(((this$1, runnable$1) => (() => {
      try {
        runnable$1.run__V()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
        } else {
          throw e
        }
      }
    }))(this, runnable))), 0)
  };
  reportFailure__jl_Throwable__V(t) {
    t.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err)
  };
}
const $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", {
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
class $c_s_util_Try extends $c_O {
}
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"))
}
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)))
}
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth))
}
const $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__ = (function($thiz, out) {
  $thiz.Ljava_io_FilterOutputStream__f_out = out;
  return $thiz
});
class $c_Ljava_io_FilterOutputStream extends $c_Ljava_io_OutputStream {
  constructor() {
    super();
    this.Ljava_io_FilterOutputStream__f_out = null
  };
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_JSConsoleBasedPrintStream$DummyOutputStream extends $c_Ljava_io_OutputStream {
}
const $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
const $ct_jl_NullPointerException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_NullPointerException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_StackOverflowError = new $TypeData().initClass({
  jl_StackOverflowError: 0
}, false, "java.lang.StackOverflowError", {
  jl_StackOverflowError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackOverflowError.prototype.$classData = $d_jl_StackOverflowError;
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    const message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
class $c_s_Product$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.s_Product$$anon$1__f_c = 0;
    this.s_Product$$anon$1__f_cmax = 0;
    this.s_Product$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.s_Product$$anon$1__f_$outer = outer
    };
    this.s_Product$$anon$1__f_c = 0;
    this.s_Product$$anon$1__f_cmax = outer.productArity__I()
  };
  hasNext__Z() {
    return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.s_Product$$anon$1__f_$outer.productElement__I__O(this.s_Product$$anon$1__f_c);
    this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
    return result
  };
}
const $d_s_Product$$anon$1 = new $TypeData().initClass({
  s_Product$$anon$1: 0
}, false, "scala.Product$$anon$1", {
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_s_Product$$anon$1.prototype.$classData = $d_s_Product$$anon$1;
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  _1__O() {
    return this.T2__f__1
  };
  _2__O() {
    return this.T2__f__2
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
class $c_sc_ClassTagSeqFactory$AnySeqDelegate extends $c_sc_ClassTagIterableFactory$AnyIterableDelegate {
  constructor(delegate) {
    super();
    $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate)
  };
}
const $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass({
  sc_ClassTagSeqFactory$AnySeqDelegate: 0
}, false, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", {
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
});
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.$classData = $d_sc_ClassTagSeqFactory$AnySeqDelegate;
const $f_sc_IndexedSeqOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
});
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
class $c_sc_Iterator$$anon$9 extends $c_sc_AbstractIterator {
  constructor(outer, f$2) {
    super();
    this.sc_Iterator$$anon$9__f_$outer = null;
    this.sc_Iterator$$anon$9__f_f$2 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_Iterator$$anon$9__f_$outer = outer
    };
    this.sc_Iterator$$anon$9__f_f$2 = f$2
  };
  knownSize__I() {
    return this.sc_Iterator$$anon$9__f_$outer.knownSize__I()
  };
  hasNext__Z() {
    return this.sc_Iterator$$anon$9__f_$outer.hasNext__Z()
  };
  next__O() {
    return this.sc_Iterator$$anon$9__f_f$2.apply__O__O(this.sc_Iterator$$anon$9__f_$outer.next__O())
  };
}
const $d_sc_Iterator$$anon$9 = new $TypeData().initClass({
  sc_Iterator$$anon$9: 0
}, false, "scala.collection.Iterator$$anon$9", {
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$9.prototype.$classData = $d_sc_Iterator$$anon$9;
const $p_sc_Iterator$ConcatIterator__advance__Z = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $thiz.sc_Iterator$ConcatIterator__f_tail.headIterator__sc_Iterator();
      $thiz.sc_Iterator$ConcatIterator__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail.sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $thiz.sc_Iterator$ConcatIterator__f_current.hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      }
    }
  }
});
const $p_sc_Iterator$ConcatIterator__merge__V = (function($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      const c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = c.sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = c.sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if ((c.sc_Iterator$ConcatIterator__f_tail !== null)) {
        c.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = c.sc_Iterator$ConcatIterator__f_tail
      };
      continue
    };
    break
  }
});
class $c_sc_Iterator$ConcatIterator extends $c_sc_AbstractIterator {
  constructor(current) {
    super();
    this.sc_Iterator$ConcatIterator__f_current = null;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    this.sc_Iterator$ConcatIterator__f_current = current;
    this.sc_Iterator$ConcatIterator__f_tail = null;
    this.sc_Iterator$ConcatIterator__f_last = null;
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false
  };
  hasNext__Z() {
    if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
      return true
    } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
      if (this.sc_Iterator$ConcatIterator__f_current.hasNext__Z()) {
        this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true
      } else {
        return $p_sc_Iterator$ConcatIterator__advance__Z(this)
      }
    } else {
      return false
    }
  };
  next__O() {
    if (this.hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
      return this.sc_Iterator$ConcatIterator__f_current.next__O()
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  concat__F0__sc_Iterator(that) {
    const c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
    if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
      this.sc_Iterator$ConcatIterator__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    } else {
      this.sc_Iterator$ConcatIterator__f_last.sc_Iterator$ConcatIteratorCell__f_tail = c;
      this.sc_Iterator$ConcatIterator__f_last = c
    };
    if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
      this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    };
    return this
  };
}
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"))
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)))
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth))
}
const $d_sc_Iterator$ConcatIterator = new $TypeData().initClass({
  sc_Iterator$ConcatIterator: 0
}, false, "scala.collection.Iterator$ConcatIterator", {
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$ConcatIterator.prototype.$classData = $d_sc_Iterator$ConcatIterator;
class $c_sc_LinearSeqIterator extends $c_sc_AbstractIterator {
  constructor(coll) {
    super();
    this.sc_LinearSeqIterator__f_coll = null;
    this.sc_LinearSeqIterator__f_these = null;
    this.sc_LinearSeqIterator__f_coll = coll;
    this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.sc_LinearSeqIterator__f_coll))(this)))
  };
  hasNext__Z() {
    const this$1 = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
    return (!this$1.isEmpty__Z())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const cur = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
      const result = cur.head__O();
      this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sc_LinearSeq(cur$1.tail__O())))(this, cur)));
      return result
    }
  };
}
const $d_sc_LinearSeqIterator = new $TypeData().initClass({
  sc_LinearSeqIterator: 0
}, false, "scala.collection.LinearSeqIterator", {
  sc_LinearSeqIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_LinearSeqIterator.prototype.$classData = $d_sc_LinearSeqIterator;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__iterator__sc_Iterator = (function($thiz) {
  return (($thiz.knownSize__I() === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_LinearSeqIterator($thiz))
});
const $f_sc_LinearSeqOps__length__I = (function($thiz) {
  let these = $as_sc_LinearSeq($thiz);
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
});
const $f_sc_LinearSeqOps__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
});
const $f_sc_LinearSeqOps__isDefinedAt__I__Z = (function($thiz, x) {
  return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0))
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__exists__F1__Z = (function($thiz, p) {
  let these = $as_sc_LinearSeq($thiz);
  while ((!these.isEmpty__Z())) {
    if ($uZ(p.apply__O__O(these.head__O()))) {
      return true
    };
    these = $as_sc_LinearSeq(these.tail__O())
  };
  return false
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
const $f_sc_LinearSeqOps__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  let these = $as_sc_LinearSeq($thiz.drop__I__O(from));
  while (true) {
    const this$3 = these;
    if ((!this$3.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return i
      };
      i = ((1 + i) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return (-1)
});
function $is_sc_LinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOps)))
}
function $as_sc_LinearSeqOps(obj) {
  return (($is_sc_LinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOps"))
}
function $isArrayOf_sc_LinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOps)))
}
function $asArrayOf_sc_LinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOps;", depth))
}
class $c_sc_MapOps$$anon$3 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_MapOps$$anon$3__f_iter = null;
    this.sc_MapOps$$anon$3__f_iter = outer.iterator__sc_Iterator()
  };
  hasNext__Z() {
    return this.sc_MapOps$$anon$3__f_iter.hasNext__Z()
  };
  next__O() {
    return $as_T2(this.sc_MapOps$$anon$3__f_iter.next__O()).T2__f__2
  };
}
const $d_sc_MapOps$$anon$3 = new $TypeData().initClass({
  sc_MapOps$$anon$3: 0
}, false, "scala.collection.MapOps$$anon$3", {
  sc_MapOps$$anon$3: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_MapOps$$anon$3.prototype.$classData = $d_sc_MapOps$$anon$3;
class $c_sc_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Seq$())
  };
}
const $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
let $n_sc_Seq$ = (void 0);
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_Iterable(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
const $p_sc_StringOps$$anon$1__advance__T = (function($thiz) {
  const start = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  while (true) {
    let $$x1;
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      const this$ = $thiz.sc_StringOps$$anon$1__f_$this$2;
      const i = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      const c = (65535 & $uI(this$.charCodeAt(i)));
      $$x1 = (!((c === 13) || (c === 10)))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    } else {
      break
    }
  };
  let end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    const this$$2 = $thiz.sc_StringOps$$anon$1__f_$this$2;
    const i$1 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
    const c$1 = (65535 & $uI(this$$2.charCodeAt(i$1)));
    $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0);
    let $$x2;
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      const this$$3 = $thiz.sc_StringOps$$anon$1__f_$this$2;
      const i$2 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      const c$2 = (65535 & $uI(this$$3.charCodeAt(i$2)));
      $$x2 = ((c$1 === 13) && (c$2 === 10))
    } else {
      $$x2 = false
    };
    if ($$x2) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    };
    if ((!$thiz.sc_StringOps$$anon$1__f_stripped$1)) {
      end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index
    }
  };
  const this$6 = $thiz.sc_StringOps$$anon$1__f_$this$2;
  const endIndex = end;
  return $as_T(this$6.substring(start, endIndex))
});
class $c_sc_StringOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(\u03b4this$2, stripped$1) {
    super();
    this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = 0;
    this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0;
    this.sc_StringOps$$anon$1__f_$this$2 = null;
    this.sc_StringOps$$anon$1__f_stripped$1 = false;
    this.sc_StringOps$$anon$1__f_$this$2 = \u03b4this$2;
    this.sc_StringOps$$anon$1__f_stripped$1 = stripped$1;
    this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = $uI(\u03b4this$2.length);
    this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0
  };
  hasNext__Z() {
    return (this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)
  };
  next__T() {
    return ((this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index >= this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len) ? $as_T($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()) : $p_sc_StringOps$$anon$1__advance__T(this))
  };
  next__O() {
    return this.next__T()
  };
}
const $d_sc_StringOps$$anon$1 = new $TypeData().initClass({
  sc_StringOps$$anon$1: 0
}, false, "scala.collection.StringOps$$anon$1", {
  sc_StringOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StringOps$$anon$1.prototype.$classData = $d_sc_StringOps$$anon$1;
const $p_sci_HashMapBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashMapBuilder__f_aliased !== null)
});
const $p_sci_HashMapBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V = (function($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const idx = (dataIx << 1);
  const src = bm.sci_BitmapIndexedMapNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((2 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, idx);
  dst.set(idx, key);
  dst.set(((1 + idx) | 0), value);
  const destPos = ((2 + idx) | 0);
  const length = ((src.u.length - idx) | 0);
  $systemArraycopy(src, idx, dst, destPos, length);
  const dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedMapNode__f_dataMap = (bm.sci_BitmapIndexedMapNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedMapNode__f_content = dst;
  bm.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedMapNode__f_size = ((1 + bm.sci_BitmapIndexedMapNode__f_size) | 0);
  bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashMapBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashMapBuilder__f_aliased = null
});
const $p_sci_HashMapBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.copy__sci_BitmapIndexedMapNode()
});
class $c_sci_HashMapBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashMapBuilder__f_aliased = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
    this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_MapNode__O__O__I__I__I__V(mapNode, key, value, originalHash, keyHash, shift) {
    if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
      const x2 = $as_sci_BitmapIndexedMapNode(mapNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        const key0 = x2.getKey__I__O(index);
        const key0UnimprovedHash = x2.getHash__I__I(index);
        if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
          x2.sci_BitmapIndexedMapNode__f_content.set(((1 + (index << 1)) | 0), value)
        } else {
          const value0 = x2.getValue__I__O(index);
          const key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_MapNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHash = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedMapNode__f_size = ((x2.sci_BitmapIndexedMapNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0)
      } else {
        $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value)
      }
    } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
      const x3 = $as_sci_HashCollisionMapNode(mapNode);
      const index$3 = x3.indexOf__O__I(key);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionMapNode__f_content = x3.sci_HashCollisionMapNode__f_content.appended__O__sci_Vector(new $c_T2(key, value))
      } else {
        const this$1 = x3.sci_HashCollisionMapNode__f_content;
        const elem = new $c_T2(key, value);
        x3.sci_HashCollisionMapNode__f_content = this$1.updateAt__I__O__sci_Vector(index$3, elem)
      }
    } else {
      throw new $c_s_MatchError(mapNode)
    }
  };
  result__sci_HashMap() {
    if ((this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode.sci_BitmapIndexedMapNode__f_size === 0)) {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap
    } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
      return this.sci_HashMapBuilder__f_aliased
    } else {
      this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
      return this.sci_HashMapBuilder__f_aliased
    }
  };
  addOne__T2__sci_HashMapBuilder(elem) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const x = elem.T2__f__1;
    const h = $m_sr_Statics$().anyHash__O__I(x);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, elem.T2__f__1, elem.T2__f__2, h, im, 0);
    return this
  };
  addOne__O__O__sci_HashMapBuilder(key, value) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    const originalHash = $m_sr_Statics$().anyHash__O__I(key);
    this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashMapBuilder(xs) {
    $p_sci_HashMapBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(xs);
      new $c_sci_HashMapBuilder$$anon$2(this, x2)
    } else if ((xs instanceof $c_scm_HashMap)) {
      const x3 = $as_scm_HashMap(xs);
      const iter = x3.nodeIterator__sc_Iterator();
      while (iter.hasNext__Z()) {
        const next = $as_scm_HashMap$Node(iter.next__O());
        const originalHash = x3.unimproveHash__I__I(next.hash__I());
        const hash = $m_sc_Hashing$().improve__I__I(originalHash);
        this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, next.key__O(), next.value__O(), originalHash, hash, 0)
      }
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__T2__sci_HashMapBuilder($as_T2(it.next__O()))
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashMapBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__T2__sci_HashMapBuilder($as_T2(elem))
  };
  result__O() {
    return this.result__sci_HashMap()
  };
}
const $d_sci_HashMapBuilder = new $TypeData().initClass({
  sci_HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMapBuilder", {
  sci_HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashMapBuilder.prototype.$classData = $d_sci_HashMapBuilder;
const $p_sci_HashSetBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashSetBuilder__f_aliased !== null)
});
const $p_sci_HashSetBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.set(ix, elem);
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V = (function($thiz, bm, bitpos, key, originalHash, keyHash) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const src = bm.sci_BitmapIndexedSetNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, dataIx);
  dst.set(dataIx, key);
  const destPos = ((1 + dataIx) | 0);
  const length = ((src.u.length - dataIx) | 0);
  $systemArraycopy(src, dataIx, dst, destPos, length);
  const dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedSetNode__f_dataMap = (bm.sci_BitmapIndexedSetNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedSetNode__f_content = dst;
  bm.sci_BitmapIndexedSetNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedSetNode__f_size = ((1 + bm.sci_BitmapIndexedSetNode__f_size) | 0);
  bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V = (function($thiz, bm, bitpos, elem) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  bm.sci_BitmapIndexedSetNode__f_content.set(dataIx, elem)
});
const $p_sci_HashSetBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashSetBuilder__f_aliased = null
});
const $p_sci_HashSetBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.copy__sci_BitmapIndexedSetNode()
});
class $c_sci_HashSetBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashSetBuilder__f_aliased = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_SetNode__O__I__I__I__V(setNode, element, originalHash, elementHash, shift) {
    if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = $as_sci_BitmapIndexedSetNode(setNode);
      const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
        const element0 = x2.getPayload__I__O(index);
        const element0UnimprovedHash = x2.getHash__I__I(index);
        if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, x2, bitpos, element0)
        } else {
          const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_SetNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHashCode = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_SetNode__O__I__I__I__V(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedSetNode__f_size = ((x2.sci_BitmapIndexedSetNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHashCode) | 0)) | 0)
      } else {
        $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, x2, bitpos, element, originalHash, elementHash)
      }
    } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
      const x3 = $as_sci_HashCollisionSetNode(setNode);
      const this$1 = x3.sci_HashCollisionSetNode__f_content;
      const index$3 = $f_sc_SeqOps__indexOf__O__I__I(this$1, element, 0);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionSetNode__f_content = x3.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)
      } else {
        const this$2 = x3.sci_HashCollisionSetNode__f_content;
        x3.sci_HashCollisionSetNode__f_content = this$2.updateAt__I__O__sci_Vector(index$3, element)
      }
    } else {
      throw new $c_s_MatchError(setNode)
    }
  };
  result__sci_HashSet() {
    if ((this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.sci_BitmapIndexedSetNode__f_size === 0)) {
      const this$1 = $m_sci_HashSet$();
      return this$1.sci_HashSet$__f_EmptySet
    } else if ((this.sci_HashSetBuilder__f_aliased !== null)) {
      return this.sci_HashSetBuilder__f_aliased
    } else {
      this.sci_HashSetBuilder__f_aliased = new $c_sci_HashSet(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode);
      return this.sci_HashSetBuilder__f_aliased
    }
  };
  addOne__O__sci_HashSetBuilder(elem) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    const h = $m_sr_Statics$().anyHash__O__I(elem);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_SetNode__O__I__I__I__V(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, elem, h, im, 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashSetBuilder(xs) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(xs);
      new $c_sci_HashSetBuilder$$anon$1(this, x2)
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__O__sci_HashSetBuilder(it.next__O())
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashSetBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_HashSetBuilder(elem)
  };
  result__O() {
    return this.result__sci_HashSet()
  };
}
const $d_sci_HashSetBuilder = new $TypeData().initClass({
  sci_HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSetBuilder", {
  sci_HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashSetBuilder.prototype.$classData = $d_sci_HashSetBuilder;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = $as_sci_IndexedSeq(it);
      return x2
    } else {
      return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyBuilder extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$LazyBuilder__f_next = null;
    this.sci_LazyList$LazyBuilder__f_list = null;
    this.clear__V()
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  clear__V() {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $m_sci_LazyList$();
    const state = new $c_sjsr_AnonFunction0(((this$1, deferred$1) => (() => deferred$1.eval__sci_LazyList$State()))(this, deferred));
    this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  result__sci_LazyList() {
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this)));
    return this.sci_LazyList$LazyBuilder__f_list
  };
  addOne__O__sci_LazyList$LazyBuilder(elem) {
    const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, elem$1, deferred$1) => (() => {
      $m_sci_LazyList$();
      $m_sci_LazyList$();
      const state = new $c_sjsr_AnonFunction0(((this$2, deferred$2) => (() => deferred$2.eval__sci_LazyList$State()))(this$1, deferred$1));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(elem$1, tl)
    }))(this, elem, deferred)));
    this.sci_LazyList$LazyBuilder__f_next = deferred;
    return this
  };
  addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs) {
    if ((xs.knownSize__I() !== 0)) {
      const deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
      this.sci_LazyList$LazyBuilder__f_next.init__F0__V(new $c_sjsr_AnonFunction0(((this$1, xs$1, deferred$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(xs$1.iterator__sc_Iterator(), new $c_sjsr_AnonFunction0(((this$2, deferred$3) => (() => deferred$3.eval__sci_LazyList$State()))(this$1, deferred$1)))))(this, xs, deferred)));
      this.sci_LazyList$LazyBuilder__f_next = deferred
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_LazyList$LazyBuilder(elem)
  };
  result__O() {
    return this.result__sci_LazyList()
  };
}
const $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  from__sc_IterableOnce__sci_List(coll) {
    if ((coll instanceof $c_sci_List)) {
      const x2 = $as_sci_List(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return $m_sci_Nil$()
    } else if ((coll instanceof $c_scm_ListBuffer)) {
      const x3 = $as_scm_ListBuffer(coll);
      return x3.toList__sci_List()
    } else {
      const this$2 = new $c_scm_ListBuffer();
      return this$2.addAll__sc_IterableOnce__scm_ListBuffer(coll).toList__sci_List()
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ListBuffer()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
const $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map2$Map2Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map2$Map2Iterator__f_i = 0;
    this.sci_Map$Map2$Map2Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map2$Map2Iterator__f_i < 2)
  };
  next__O() {
    const x1 = this.sci_Map$Map2$Map2Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        result = this.nextResult__O__O__O(this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1);
        break
      }
      case 1: {
        result = this.nextResult__O__O__O(this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2$Map2Iterator__f_$outer.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map3$Map3Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map3$Map3Iterator__f_i = 0;
    this.sci_Map$Map3$Map3Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map3$Map3Iterator__f_i < 3)
  };
  next__O() {
    const x1 = this.sci_Map$Map3$Map3Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        result = this.nextResult__O__O__O(this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1);
        break
      }
      case 1: {
        result = this.nextResult__O__O__O(this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2);
        break
      }
      case 2: {
        result = this.nextResult__O__O__O(this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3$Map3Iterator__f_$outer.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
    return result
  };
}
const $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__ = (function($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
  return $thiz
});
class $c_sci_Map$Map4$Map4Iterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sci_Map$Map4$Map4Iterator__f_i = 0;
    this.sci_Map$Map4$Map4Iterator__f_$outer = null
  };
  hasNext__Z() {
    return (this.sci_Map$Map4$Map4Iterator__f_i < 4)
  };
  next__O() {
    const x1 = this.sci_Map$Map4$Map4Iterator__f_i;
    let result;
    switch (x1) {
      case 0: {
        result = this.nextResult__O__O__O(this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1);
        break
      }
      case 1: {
        result = this.nextResult__O__O__O(this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2);
        break
      }
      case 2: {
        result = this.nextResult__O__O__O(this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3);
        break
      }
      case 3: {
        result = this.nextResult__O__O__O(this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4$Map4Iterator__f_$outer.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
        break
      }
      default: {
        result = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      }
    };
    this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
    return result
  };
}
class $c_sci_MapBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_MapBuilderImpl__f_elems = null;
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
    this.sci_MapBuilderImpl__f_hashMapBuilder = null;
    this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Map() {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems)
  };
  addOne__O__O__sci_MapBuilderImpl(key, value) {
    if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    } else if ((this.sci_MapBuilderImpl__f_elems.size__I() < 4)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else if (this.sci_MapBuilderImpl__f_elems.contains__O__Z(key)) {
      this.sci_MapBuilderImpl__f_elems = $as_sci_Map(this.sci_MapBuilderImpl__f_elems.updated__O__O__sci_MapOps(key, value))
    } else {
      this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
      if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
        this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder()
      };
      $as_sci_Map$Map4(this.sci_MapBuilderImpl__f_elems).buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
      this.sci_MapBuilderImpl__f_hashMapBuilder.addOne__O__O__sci_HashMapBuilder(key, value)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_MapBuilderImpl(xs) {
    return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? (this.sci_MapBuilderImpl__f_hashMapBuilder.addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $as_sci_MapBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    const elem$1 = $as_T2(elem);
    return this.addOne__O__O__sci_MapBuilderImpl(elem$1.T2__f__1, elem$1.T2__f__2)
  };
  result__O() {
    return this.result__sci_Map()
  };
}
function $as_sci_MapBuilderImpl(obj) {
  return (((obj instanceof $c_sci_MapBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapBuilderImpl"))
}
function $isArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapBuilderImpl)))
}
function $asArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_MapBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapBuilderImpl;", depth))
}
const $d_sci_MapBuilderImpl = new $TypeData().initClass({
  sci_MapBuilderImpl: 0
}, false, "scala.collection.immutable.MapBuilderImpl", {
  sci_MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_MapBuilderImpl.prototype.$classData = $d_sci_MapBuilderImpl;
class $c_sci_MapKeyValueTupleIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__T2() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
  next__O() {
    return this.next__T2()
  };
}
const $d_sci_MapKeyValueTupleIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleIterator", {
  sci_MapKeyValueTupleIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapKeyValueTupleIterator.prototype.$classData = $d_sci_MapKeyValueTupleIterator;
class $c_sci_MapValueIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const value = $as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return value
  };
}
const $d_sci_MapValueIterator = new $TypeData().initClass({
  sci_MapValueIterator: 0
}, false, "scala.collection.immutable.MapValueIterator", {
  sci_MapValueIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_MapValueIterator.prototype.$classData = $d_sci_MapValueIterator;
class $c_sci_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Seq(it) {
    if ($is_sci_Seq(it)) {
      const x2 = $as_sci_Seq(it);
      return x2
    } else {
      return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Seq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_Seq(it)
  };
}
const $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
let $n_sci_Seq$ = (void 0);
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
class $c_sci_SetBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_SetBuilderImpl__f_elems = null;
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false;
    this.sci_SetBuilderImpl__f_hashSetBuilder = null;
    this.sci_SetBuilderImpl__f_elems = $m_sci_Set$EmptySet$();
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Set() {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_SetBuilderImpl__f_elems)
  };
  addOne__O__sci_SetBuilderImpl(elem) {
    if (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    } else if ((this.sci_SetBuilderImpl__f_elems.size__I() < 4)) {
      const this$1 = this.sci_SetBuilderImpl__f_elems;
      this.sci_SetBuilderImpl__f_elems = $as_sci_Set(this$1.incl__O__sci_SetOps(elem))
    } else if ((!this.sci_SetBuilderImpl__f_elems.contains__O__Z(elem))) {
      this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = true;
      if ((this.sci_SetBuilderImpl__f_hashSetBuilder === null)) {
        this.sci_SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSetBuilder()
      };
      $as_sci_Set$Set4(this.sci_SetBuilderImpl__f_elems).buildTo__scm_Builder__scm_Builder(this.sci_SetBuilderImpl__f_hashSetBuilder);
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_SetBuilderImpl(xs) {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? (this.sci_SetBuilderImpl__f_hashSetBuilder.addAll__sc_IterableOnce__sci_HashSetBuilder(xs), this) : $as_sci_SetBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_SetBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_SetBuilderImpl(elem)
  };
  result__O() {
    return this.result__sci_Set()
  };
}
function $as_sci_SetBuilderImpl(obj) {
  return (((obj instanceof $c_sci_SetBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SetBuilderImpl"))
}
function $isArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetBuilderImpl)))
}
function $asArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_SetBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SetBuilderImpl;", depth))
}
const $d_sci_SetBuilderImpl = new $TypeData().initClass({
  sci_SetBuilderImpl: 0
}, false, "scala.collection.immutable.SetBuilderImpl", {
  sci_SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_SetBuilderImpl.prototype.$classData = $d_sci_SetBuilderImpl;
class $c_sci_SetHashIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    this.sci_SetHashIterator__f_hash = 0;
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
    this.sci_SetHashIterator__f_hash = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    return this.sci_SetHashIterator__f_hash
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_SetHashIterator__f_hash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return this
  };
}
const $d_sci_SetHashIterator = new $TypeData().initClass({
  sci_SetHashIterator: 0
}, false, "scala.collection.immutable.SetHashIterator", {
  sci_SetHashIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetHashIterator.prototype.$classData = $d_sci_SetHashIterator;
class $c_sci_SetIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = $as_sci_SetNode(this.sci_ChampBaseIterator__f_currentValueNode).getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
}
const $d_sci_SetIterator = new $TypeData().initClass({
  sci_SetIterator: 0
}, false, "scala.collection.immutable.SetIterator", {
  sci_SetIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetIterator.prototype.$classData = $d_sci_SetIterator;
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "1024");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 1024
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_NIL = null;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_ArraySeq)) {
      const x2 = $as_sci_ArraySeq(it);
      if ((x2.length__I() <= 32)) {
        if (x2.isEmpty__Z()) {
          return this.sci_Vector$__f_NIL
        } else {
          const unsafeArray = x2.unsafeArray__O();
          const len = $m_sr_ScalaRunTime$().array_length__O__I(unsafeArray);
          const v = new $c_sci_Vector(0, len, 0);
          const display0 = $newArrayObject($d_O.getArrayOf(), [len]);
          if ($isArrayOf_O(unsafeArray, 1)) {
            $systemArraycopy(unsafeArray, 0, display0, 0, len)
          } else {
            let i = 0;
            while ((i < len)) {
              display0.set(i, $m_sr_ScalaRunTime$().array_apply__O__I__O(unsafeArray, i));
              i = ((1 + i) | 0)
            }
          };
          v.sci_Vector__f_display0 = display0;
          v.sci_Vector__f_depth = 1;
          return v
        }
      }
    };
    if ((it instanceof $c_sci_Vector)) {
      const x3 = $as_sci_Vector(it);
      return x3
    };
    const knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return this.sci_Vector$__f_NIL
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      const display0$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
      const this$1 = it.iterator__sc_Iterator();
      $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, display0$2, 0);
      const v$2 = new $c_sci_Vector(0, knownSize, 0);
      v$2.sci_Vector__f_depth = 1;
      v$2.sci_Vector__f_display0 = display0$2;
      return v$2
    } else {
      const this$2 = new $c_sci_VectorBuilder();
      const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  };
  scala$collection$immutable$Vector$$single__O__sci_Vector(elem) {
    const s = new $c_sci_Vector(0, 1, 0);
    s.sci_Vector__f_depth = 1;
    s.sci_Vector__f_display0 = $makeNativeArrayWrapper($d_O.getArrayOf(), [elem]);
    return s
  };
  newBuilder__scm_Builder() {
    return new $c_sci_VectorBuilder()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.set(v1, it.next__O());
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  newBuilder__scm_Builder() {
    return new $c_scm_ArrayBuffer$$anon$1()
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_ArrayBuffer$$anon$1 extends $c_scm_GrowableBuilder {
  constructor() {
    super();
    $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()))
  };
  sizeHint__I__V(size) {
    $as_scm_ArrayBuffer(this.scm_GrowableBuilder__f_elems).ensureSize__I__V(size)
  };
}
const $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass({
  scm_ArrayBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ArrayBuffer$$anon$1", {
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_ArrayBuffer$$anon$1.prototype.$classData = $d_scm_ArrayBuffer$$anon$1;
const $ct_scm_ImmutableBuilder__sc_IterableOnce__ = (function($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_empty = empty;
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz
});
class $c_scm_ImmutableBuilder extends $c_O {
  constructor() {
    super();
    this.scm_ImmutableBuilder__f_empty = null;
    this.scm_ImmutableBuilder__f_elems = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  result__O() {
    return this.scm_ImmutableBuilder__f_elems
  };
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  newBuilder__scm_Builder() {
    return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer())
  };
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
class $c_s_concurrent_ExecutionContext$parasitic$ extends $c_O {
  constructor() {
    super();
    this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = null;
    $n_s_concurrent_ExecutionContext$parasitic$ = this;
    this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = new $c_jl_ThreadLocal()
  };
  execute__jl_Runnable__V(runnable) {
    $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable)
  };
  reportFailure__jl_Throwable__V(t) {
    $m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter.apply__O__O(t)
  };
}
const $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().initClass({
  s_concurrent_ExecutionContext$parasitic$: 0
}, false, "scala.concurrent.ExecutionContext$parasitic$", {
  s_concurrent_ExecutionContext$parasitic$: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1,
  s_concurrent_BatchingExecutor: 1
});
$c_s_concurrent_ExecutionContext$parasitic$.prototype.$classData = $d_s_concurrent_ExecutionContext$parasitic$;
let $n_s_concurrent_ExecutionContext$parasitic$ = (void 0);
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$()
  };
  return $n_s_concurrent_ExecutionContext$parasitic$
}
const $f_s_math_Ordering__gteq__O__O__Z = (function($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) >= 0)
});
const $f_s_math_Ordering__lt__O__O__Z = (function($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) < 0)
});
const $f_s_math_Ordering__gt__O__O__Z = (function($thiz, x, y) {
  return ($thiz.compare__O__O__I(x, y) > 0)
});
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
const $f_s_reflect_ClassTag__equals__O__Z = (function($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
});
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  newBuilder__scm_Builder() {
    return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
  };
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = $as_sjs_js_WrappedArray(x$1$2);
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
class $c_s_util_Failure extends $c_s_util_Try {
  constructor(exception) {
    super();
    this.s_util_Failure__f_exception = null;
    this.s_util_Failure__f_exception = exception
  };
  get__O() {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(this.s_util_Failure__f_exception)
  };
  foreach__F1__V(f) {
    /*<skip>*/
  };
  recover__s_PartialFunction__s_util_Try(pf) {
    const marker = $m_sr_Statics$PFMarker$();
    try {
      const v = pf.applyOrElse__O__F1__O(this.s_util_Failure__f_exception, new $c_sjsr_AnonFunction1(((this$2, marker$1) => ((x$2) => {
        $as_jl_Throwable(x$2);
        return marker$1
      }))(this, marker)));
      return ((marker !== v) ? new $c_s_util_Success(v) : this)
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        if ((e$2 !== null)) {
          const o11 = $m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
          if ((!o11.isEmpty__Z())) {
            const e$3 = $as_jl_Throwable(o11.get__O());
            return new $c_s_util_Failure(e$3)
          }
        };
        throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
      } else {
        throw e
      }
    }
  };
  productPrefix__T() {
    return "Failure"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Failure)) {
      const Failure$1 = $as_s_util_Failure(x$1);
      const x = this.s_util_Failure__f_exception;
      const x$2 = Failure$1.s_util_Failure__f_exception;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  };
}
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"))
}
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)))
}
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth))
}
const $d_s_util_Failure = new $TypeData().initClass({
  s_util_Failure: 0
}, false, "scala.util.Failure", {
  s_util_Failure: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Failure.prototype.$classData = $d_s_util_Failure;
class $c_s_util_Success extends $c_s_util_Try {
  constructor(value) {
    super();
    this.s_util_Success__f_value = null;
    this.s_util_Success__f_value = value
  };
  get__O() {
    return this.s_util_Success__f_value
  };
  foreach__F1__V(f) {
    f.apply__O__O(this.s_util_Success__f_value)
  };
  recover__s_PartialFunction__s_util_Try(pf) {
    return this
  };
  productPrefix__T() {
    return "Success"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_util_Success)) {
      const Success$1 = $as_s_util_Success(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, Success$1.s_util_Success__f_value)
    } else {
      return false
    }
  };
}
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"))
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)))
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth))
}
const $d_s_util_Success = new $TypeData().initClass({
  s_util_Success: 0
}, false, "scala.util.Success", {
  s_util_Success: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Success.prototype.$classData = $d_s_util_Success;
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_ArrayIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
function $as_jl_ArrayIndexOutOfBoundsException(obj) {
  return (((obj instanceof $c_jl_ArrayIndexOutOfBoundsException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ArrayIndexOutOfBoundsException"))
}
function $isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ArrayIndexOutOfBoundsException)))
}
function $asArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (($isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ArrayIndexOutOfBoundsException;", depth))
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_Lorg_scalajs_dom_ext_AjaxException extends $c_jl_Exception {
  constructor(xhr) {
    super();
    this.Lorg_scalajs_dom_ext_AjaxException__f_xhr = null;
    this.Lorg_scalajs_dom_ext_AjaxException__f_xhr = xhr;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  productPrefix__T() {
    return "AjaxException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lorg_scalajs_dom_ext_AjaxException__f_xhr : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lorg_scalajs_dom_ext_AjaxException)) {
      const AjaxException$1 = $as_Lorg_scalajs_dom_ext_AjaxException(x$1);
      const x = this.Lorg_scalajs_dom_ext_AjaxException__f_xhr;
      const y = AjaxException$1.Lorg_scalajs_dom_ext_AjaxException__f_xhr;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
}
function $as_Lorg_scalajs_dom_ext_AjaxException(obj) {
  return (((obj instanceof $c_Lorg_scalajs_dom_ext_AjaxException) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.dom.ext.AjaxException"))
}
function $isArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_dom_ext_AjaxException)))
}
function $asArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_dom_ext_AjaxException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.dom.ext.AjaxException;", depth))
}
const $d_Lorg_scalajs_dom_ext_AjaxException = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_AjaxException: 0
}, false, "org.scalajs.dom.ext.AjaxException", {
  Lorg_scalajs_dom_ext_AjaxException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lorg_scalajs_dom_ext_AjaxException.prototype.$classData = $d_Lorg_scalajs_dom_ext_AjaxException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_Iterable$()
  };
  className__T() {
    return this.stringPrefix__T()
  };
  stringPrefix__T() {
    return "Iterable"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll))
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  forall__F1__Z(p) {
    return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
const $ct_sc_ArrayOps$ArrayIterator__O__ = (function($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_sr_ScalaRunTime$().array_length__O__I($thiz.sc_ArrayOps$ArrayIterator__f_xs);
  return $thiz
});
class $c_sc_ArrayOps$ArrayIterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sc_ArrayOps$ArrayIterator__f_xs = null;
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
    this.sc_ArrayOps$ArrayIterator__f_len = 0
  };
  knownSize__I() {
    return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
  };
  hasNext__Z() {
    return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len)
  };
  next__O() {
    try {
      const r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      } else {
        throw e
      }
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const a = $m_sr_ScalaRunTime$().array_length__O__I(this.sc_ArrayOps$ArrayIterator__f_xs);
      const b = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((a < b) ? a : b)
    };
    return this
  };
}
const $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator: 0
}, false, "scala.collection.ArrayOps$ArrayIterator", {
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator.prototype.$classData = $d_sc_ArrayOps$ArrayIterator;
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
class $c_sc_Iterator$$anon$21 extends $c_scm_ImmutableBuilder {
  constructor() {
    super();
    $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty)
  };
  addOne__O__sc_Iterator$$anon$21(elem) {
    const this$3 = $as_sc_Iterator(this.scm_ImmutableBuilder__f_elems);
    const xs = new $c_sjsr_AnonFunction0(((this$1, elem$1) => (() => {
      $m_sc_Iterator$();
      return new $c_sc_Iterator$$anon$20(elem$1)
    }))(this, elem));
    this.scm_ImmutableBuilder__f_elems = this$3.concat__F0__sc_Iterator(xs);
    return this
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sc_Iterator$$anon$21(elem)
  };
}
const $d_sc_Iterator$$anon$21 = new $TypeData().initClass({
  sc_Iterator$$anon$21: 0
}, false, "scala.collection.Iterator$$anon$21", {
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sc_Iterator$$anon$21.prototype.$classData = $d_sc_Iterator$$anon$21;
const $f_sc_MapOps__applyOrElse__O__F1__O = (function($thiz, x, default$1) {
  return $thiz.getOrElse__O__F0__O(x, new $c_sjsr_AnonFunction0(((this$1, default$2, x$1) => (() => default$2.apply__O__O(x$1)))($thiz, default$1, x)))
});
const $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, sb, start, sep, end) {
  const this$2 = $thiz.iterator__sc_Iterator();
  const f = new $c_sjsr_AnonFunction1(((this$1) => ((x0$1$2) => {
    const x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      const k = x0$1.T2__f__1;
      const v = x0$1.T2__f__2;
      return ((k + " -> ") + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))($thiz));
  const this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end)
});
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
class $c_sci_Map$Map2$$anon$1 extends $c_sci_Map$Map2$Map2Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return new $c_T2(k, v)
  };
}
const $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
class $c_sci_Map$Map2$$anon$3 extends $c_sci_Map$Map2$Map2Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return v
  };
}
const $d_sci_Map$Map2$$anon$3 = new $TypeData().initClass({
  sci_Map$Map2$$anon$3: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$3", {
  sci_Map$Map2$$anon$3: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map2$$anon$3.prototype.$classData = $d_sci_Map$Map2$$anon$3;
class $c_sci_Map$Map3$$anon$4 extends $c_sci_Map$Map3$Map3Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return new $c_T2(k, v)
  };
}
const $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
class $c_sci_Map$Map3$$anon$6 extends $c_sci_Map$Map3$Map3Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return v
  };
}
const $d_sci_Map$Map3$$anon$6 = new $TypeData().initClass({
  sci_Map$Map3$$anon$6: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$6", {
  sci_Map$Map3$$anon$6: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map3$$anon$6.prototype.$classData = $d_sci_Map$Map3$$anon$6;
class $c_sci_Map$Map4$$anon$7 extends $c_sci_Map$Map4$Map4Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return new $c_T2(k, v)
  };
}
const $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
class $c_sci_Map$Map4$$anon$9 extends $c_sci_Map$Map4$Map4Iterator {
  constructor(outer) {
    super();
    $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
  };
  nextResult__O__O__O(k, v) {
    return v
  };
}
const $d_sci_Map$Map4$$anon$9 = new $TypeData().initClass({
  sci_Map$Map4$$anon$9: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$9", {
  sci_Map$Map4$$anon$9: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_Map$Map4$$anon$9.prototype.$classData = $d_sci_Map$Map4$$anon$9;
class $c_sci_NumericRange$NumericRangeIterator extends $c_sc_AbstractIterator {
  constructor(self, num) {
    super();
    this.sci_NumericRange$NumericRangeIterator__f_self = null;
    this.sci_NumericRange$NumericRangeIterator__f_num = null;
    this.sci_NumericRange$NumericRangeIterator__f__hasNext = false;
    this.sci_NumericRange$NumericRangeIterator__f__next = null;
    this.sci_NumericRange$NumericRangeIterator__f_lastElement = null;
    this.sci_NumericRange$NumericRangeIterator__f_self = self;
    this.sci_NumericRange$NumericRangeIterator__f_num = num;
    this.sci_NumericRange$NumericRangeIterator__f__hasNext = (!self.isEmpty__Z());
    this.sci_NumericRange$NumericRangeIterator__f__next = self.sci_NumericRange__f_start;
    this.sci_NumericRange$NumericRangeIterator__f_lastElement = (this.sci_NumericRange$NumericRangeIterator__f__hasNext ? self.last__O() : self.sci_NumericRange__f_start)
  };
  knownSize__I() {
    if (this.sci_NumericRange$NumericRangeIterator__f__hasNext) {
      const $$x1 = this.sci_NumericRange$NumericRangeIterator__f_num;
      const this$2 = this.sci_NumericRange$NumericRangeIterator__f_num;
      const this$1 = this.sci_NumericRange$NumericRangeIterator__f_num;
      const lhs = this.sci_NumericRange$NumericRangeIterator__f_lastElement;
      const lhs$1 = new $c_s_math_Integral$IntegralOps(this$1, lhs).$minus__O__O(this.sci_NumericRange$NumericRangeIterator__f__next);
      return ((1 + $$x1.toInt__O__I(new $c_s_math_Integral$IntegralOps(this$2, lhs$1).$div__O__O(this.sci_NumericRange$NumericRangeIterator__f_self.sci_NumericRange__f_step))) | 0)
    } else {
      return 0
    }
  };
  hasNext__Z() {
    return this.sci_NumericRange$NumericRangeIterator__f__hasNext
  };
  next__O() {
    if ((!this.sci_NumericRange$NumericRangeIterator__f__hasNext)) {
      $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    };
    const value = this.sci_NumericRange$NumericRangeIterator__f__next;
    this.sci_NumericRange$NumericRangeIterator__f__hasNext = (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, this.sci_NumericRange$NumericRangeIterator__f_lastElement));
    this.sci_NumericRange$NumericRangeIterator__f__next = this.sci_NumericRange$NumericRangeIterator__f_num.plus__O__O__O(value, this.sci_NumericRange$NumericRangeIterator__f_self.sci_NumericRange__f_step);
    return value
  };
}
const $d_sci_NumericRange$NumericRangeIterator = new $TypeData().initClass({
  sci_NumericRange$NumericRangeIterator: 0
}, false, "scala.collection.immutable.NumericRange$NumericRangeIterator", {
  sci_NumericRange$NumericRangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_NumericRange$NumericRangeIterator.prototype.$classData = $d_sci_NumericRange$NumericRangeIterator;
const $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorBuilder__f_lo >= $thiz.sci_VectorBuilder__f_display0.u.length)) {
    const newBlockIndex = ((32 + $thiz.sci_VectorBuilder__f_blockIndex) | 0);
    const xor = ($thiz.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, newBlockIndex, xor);
    $thiz.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    $thiz.sci_VectorBuilder__f_lo = 0
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_display0 = null;
    this.sci_VectorBuilder__f_display1 = null;
    this.sci_VectorBuilder__f_display2 = null;
    this.sci_VectorBuilder__f_display3 = null;
    this.sci_VectorBuilder__f_display4 = null;
    this.sci_VectorBuilder__f_display5 = null;
    this.sci_VectorBuilder__f_display0 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_depth = 1;
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  depth__I() {
    return this.sci_VectorBuilder__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorBuilder__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorBuilder__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorBuilder__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorBuilder__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorBuilder__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorBuilder__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorBuilder__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorBuilder__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorBuilder__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display5 = x$1
  };
  size__I() {
    return ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0)
  };
  addOne__O__sci_VectorBuilder(elem) {
    $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
    this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
    this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
      this.sci_VectorBuilder__f_lo = ((this.sci_VectorBuilder__f_lo + it.copyToArray__O__I__I__I(this.sci_VectorBuilder__f_display0, this.sci_VectorBuilder__f_lo, ((this.sci_VectorBuilder__f_display0.u.length - this.sci_VectorBuilder__f_lo) | 0))) | 0)
    };
    return this
  };
  result__sci_Vector() {
    const size = this.size__I();
    if ((size === 0)) {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    };
    const s = new $c_sci_Vector(0, size, 0);
    const depth = this.sci_VectorBuilder__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if ((this.sci_VectorBuilder__f_depth > 1)) {
      const xor = (((-1) + size) | 0);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
    };
    return s
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorIterator__f_lo === $thiz.sci_VectorIterator__f_endLo)) {
    if (((($thiz.sci_VectorIterator__f_blockIndex + $thiz.sci_VectorIterator__f_lo) | 0) < $thiz.sci_VectorIterator__f_endIndex)) {
      const newBlockIndex = ((32 + $thiz.sci_VectorIterator__f_blockIndex) | 0);
      const xor = ($thiz.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, newBlockIndex, xor);
      $thiz.sci_VectorIterator__f_blockIndex = newBlockIndex;
      const a = (($thiz.sci_VectorIterator__f_endIndex - $thiz.sci_VectorIterator__f_blockIndex) | 0);
      $thiz.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
      $thiz.sci_VectorIterator__f_lo = 0
    } else {
      $thiz.sci_VectorIterator__f__hasNext = false
    }
  }
});
class $c_sci_VectorIterator extends $c_sc_AbstractIterator {
  constructor(_startIndex, endIndex) {
    super();
    this.sci_VectorIterator__f_endIndex = 0;
    this.sci_VectorIterator__f_blockIndex = 0;
    this.sci_VectorIterator__f_lo = 0;
    this.sci_VectorIterator__f_endLo = 0;
    this.sci_VectorIterator__f__hasNext = false;
    this.sci_VectorIterator__f_depth = 0;
    this.sci_VectorIterator__f_display0 = null;
    this.sci_VectorIterator__f_display1 = null;
    this.sci_VectorIterator__f_display2 = null;
    this.sci_VectorIterator__f_display3 = null;
    this.sci_VectorIterator__f_display4 = null;
    this.sci_VectorIterator__f_display5 = null;
    this.sci_VectorIterator__f_endIndex = endIndex;
    this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
    this.sci_VectorIterator__f_lo = (31 & _startIndex);
    const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
    this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
    this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)
  };
  depth__I() {
    return this.sci_VectorIterator__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorIterator__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorIterator__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorIterator__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorIterator__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorIterator__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorIterator__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorIterator__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorIterator__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorIterator__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorIterator__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display5 = x$1
  };
  hasNext__Z() {
    return this.sci_VectorIterator__f__hasNext
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_VectorIterator__f_lo;
      const hi = (value >> 31);
      const hi$1 = (n >> 31);
      const lo = ((value + n) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      const value$1 = this.sci_VectorIterator__f_blockIndex;
      const hi$3 = (value$1 >> 31);
      const lo$1 = ((value$1 + lo) | 0);
      const hi$4 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ value$1)) ? ((1 + ((hi$3 + hi$2) | 0)) | 0) : ((hi$3 + hi$2) | 0));
      const value$2 = this.sci_VectorIterator__f_endIndex;
      const hi$5 = (value$2 >> 31);
      if (((hi$4 === hi$5) ? (((-2147483648) ^ lo$1) < ((-2147483648) ^ value$2)) : (hi$4 < hi$5))) {
        this.sci_VectorIterator__f_lo = lo;
        if ((this.sci_VectorIterator__f_lo >= 32)) {
          this.sci_VectorIterator__f_blockIndex = ((-32) & ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0));
          const index = this.sci_VectorIterator__f_blockIndex;
          const depth = this.sci_VectorIterator__f_depth;
          $f_sci_VectorPointer__gotoNewBlockStart__I__I__V(this, index, depth);
          const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
          this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
          this.sci_VectorIterator__f_lo = (31 & this.sci_VectorIterator__f_lo)
        }
      } else {
        this.sci_VectorIterator__f__hasNext = false;
        this.sci_VectorIterator__f_endIndex = 0
      }
    };
    return this
  };
  next__O() {
    if ((!this.sci_VectorIterator__f__hasNext)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
    };
    const res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
    this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
    $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this);
    return res
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const srcLen = this.remainingElementCount__I();
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((xsLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const totalToBeCopied = ((x$1 > 0) ? x$1 : 0);
    let totalCopied = 0;
    while ((this.sci_VectorIterator__f__hasNext && (totalCopied < totalToBeCopied))) {
      const _start = ((start + totalCopied) | 0);
      const srcLen$1 = ((this.sci_VectorIterator__f_endLo - this.sci_VectorIterator__f_lo) | 0);
      const len$1 = ((len - totalCopied) | 0);
      const x$2 = ((len$1 < srcLen$1) ? len$1 : srcLen$1);
      const y$1 = ((xsLen - _start) | 0);
      const x$3 = ((x$2 < y$1) ? x$2 : y$1);
      const toBeCopied = ((x$3 > 0) ? x$3 : 0);
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_VectorIterator__f_display0, this.sci_VectorIterator__f_lo, xs, _start, toBeCopied);
      totalCopied = ((totalCopied + toBeCopied) | 0);
      this.sci_VectorIterator__f_lo = ((this.sci_VectorIterator__f_lo + toBeCopied) | 0);
      $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this)
    };
    return totalCopied
  };
  remainingElementCount__I() {
    const x = ((this.sci_VectorIterator__f_endIndex - ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0)) | 0);
    return ((x > 0) ? x : 0)
  };
  knownSize__I() {
    return this.remainingElementCount__I()
  };
}
const $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
const $ct_scm_ArrayBuilder__ = (function($thiz) {
  $thiz.scm_ArrayBuilder__f_capacity = 0;
  $thiz.scm_ArrayBuilder__f_size = 0;
  return $thiz
});
class $c_scm_ArrayBuilder extends $c_O {
  constructor() {
    super();
    this.scm_ArrayBuilder__f_capacity = 0;
    this.scm_ArrayBuilder__f_size = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
}
class $c_scm_ArraySeq$ extends $c_O {
  constructor() {
    super();
    this.scm_ArraySeq$__f_untagged = null;
    this.scm_ArraySeq$__f_EmptyArraySeq = null;
    $n_scm_ArraySeq$ = this;
    this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
    this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef($newArrayObject($d_O.getArrayOf(), [0]))
  };
  make__O__scm_ArraySeq(x) {
    if ((x === null)) {
      return null
    } else if ($isArrayOf_O(x, 1)) {
      const x3 = $asArrayOf_O(x, 1);
      return new $c_scm_ArraySeq$ofRef(x3)
    } else if ($isArrayOf_I(x, 1)) {
      const x4 = $asArrayOf_I(x, 1);
      return new $c_scm_ArraySeq$ofInt(x4)
    } else if ($isArrayOf_D(x, 1)) {
      const x5 = $asArrayOf_D(x, 1);
      return new $c_scm_ArraySeq$ofDouble(x5)
    } else if ($isArrayOf_J(x, 1)) {
      const x6 = $asArrayOf_J(x, 1);
      return new $c_scm_ArraySeq$ofLong(x6)
    } else if ($isArrayOf_F(x, 1)) {
      const x7 = $asArrayOf_F(x, 1);
      return new $c_scm_ArraySeq$ofFloat(x7)
    } else if ($isArrayOf_C(x, 1)) {
      const x8 = $asArrayOf_C(x, 1);
      return new $c_scm_ArraySeq$ofChar(x8)
    } else if ($isArrayOf_B(x, 1)) {
      const x9 = $asArrayOf_B(x, 1);
      return new $c_scm_ArraySeq$ofByte(x9)
    } else if ($isArrayOf_S(x, 1)) {
      const x10 = $asArrayOf_S(x, 1);
      return new $c_scm_ArraySeq$ofShort(x10)
    } else if ($isArrayOf_Z(x, 1)) {
      const x11 = $asArrayOf_Z(x, 1);
      return new $c_scm_ArraySeq$ofBoolean(x11)
    } else if ($isArrayOf_jl_Void(x, 1)) {
      const x12 = $asArrayOf_jl_Void(x, 1);
      return new $c_scm_ArraySeq$ofUnit(x12)
    } else {
      throw new $c_s_MatchError(x)
    }
  };
}
const $d_scm_ArraySeq$ = new $TypeData().initClass({
  scm_ArraySeq$: 0
}, false, "scala.collection.mutable.ArraySeq$", {
  scm_ArraySeq$: 1,
  O: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$.prototype.$classData = $d_scm_ArraySeq$;
let $n_scm_ArraySeq$ = (void 0);
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$()
  };
  return $n_scm_ArraySeq$
}
class $c_s_math_Ordering$Reverse extends $c_O {
  constructor(outer) {
    super();
    this.s_math_Ordering$Reverse__f_outer = null;
    this.s_math_Ordering$Reverse__f_outer = outer
  };
  compare__O__O__I(x, y) {
    return this.s_math_Ordering$Reverse__f_outer.compare__O__O__I(y, x)
  };
  equals__O__Z(obj) {
    if ((obj !== null)) {
      if ((this === obj)) {
        return true
      }
    };
    if ((obj instanceof $c_s_math_Ordering$Reverse)) {
      const x3 = $as_s_math_Ordering$Reverse(obj);
      const x = this.s_math_Ordering$Reverse__f_outer;
      const x$2 = x3.s_math_Ordering$Reverse__f_outer;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    };
    return false
  };
  hashCode__I() {
    return $imul(41, this.s_math_Ordering$Reverse__f_outer.hashCode__I())
  };
}
function $as_s_math_Ordering$Reverse(obj) {
  return (((obj instanceof $c_s_math_Ordering$Reverse) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.Ordering$Reverse"))
}
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Ordering$Reverse)))
}
function $asArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (($isArrayOf_s_math_Ordering$Reverse(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.Ordering$Reverse;", depth))
}
const $d_s_math_Ordering$Reverse = new $TypeData().initClass({
  s_math_Ordering$Reverse: 0
}, false, "scala.math.Ordering$Reverse", {
  s_math_Ordering$Reverse: 1,
  O: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Reverse.prototype.$classData = $d_s_math_Ordering$Reverse;
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
const $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__ = (function($thiz, _out, autoFlush, charset) {
  $thiz.Ljava_io_PrintStream__f_autoFlush = autoFlush;
  $thiz.Ljava_io_PrintStream__f_charset = charset;
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  $thiz.Ljava_io_PrintStream__f_closing = false;
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  $thiz.Ljava_io_PrintStream__f_errorFlag = false;
  return $thiz
});
class $c_Ljava_io_PrintStream extends $c_Ljava_io_FilterOutputStream {
  constructor() {
    super();
    this.Ljava_io_PrintStream__f_encoder = null;
    this.Ljava_io_PrintStream__f_autoFlush = false;
    this.Ljava_io_PrintStream__f_charset = null;
    this.Ljava_io_PrintStream__f_closing = false;
    this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
    this.Ljava_io_PrintStream__f_errorFlag = false;
    this.Ljava_io_PrintStream__f_bitmap$0 = false
  };
  println__T__V(s) {
    this.print__T__V(s);
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n")
  };
}
class $c_sc_ArrayOps$ArrayIterator$mcB$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcB$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp)
  };
  next$mcB$sp__B() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uB($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcB$sp__B()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcB$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", {
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcB$sp;
class $c_sc_ArrayOps$ArrayIterator$mcC$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcC$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp)
  };
  next$mcC$sp__C() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uC($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return $bC(this.next$mcC$sp__C())
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcC$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", {
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcC$sp;
class $c_sc_ArrayOps$ArrayIterator$mcD$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcD$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp)
  };
  next$mcD$sp__D() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uD($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcD$sp__D()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcD$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", {
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcD$sp;
class $c_sc_ArrayOps$ArrayIterator$mcF$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcF$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp)
  };
  next$mcF$sp__F() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uF($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcF$sp__F()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcF$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", {
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcF$sp;
class $c_sc_ArrayOps$ArrayIterator$mcI$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcI$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp)
  };
  next$mcI$sp__I() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uI($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcI$sp__I()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcI$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", {
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcI$sp;
class $c_sc_ArrayOps$ArrayIterator$mcJ$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcJ$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp)
  };
  next$mcJ$sp__J() {
    try {
      const t = this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return new $c_RTLong(lo, hi)
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uJ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcJ$sp__J()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", {
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcJ$sp;
class $c_sc_ArrayOps$ArrayIterator$mcS$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcS$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp)
  };
  next$mcS$sp__S() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uS($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcS$sp__S()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcS$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", {
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcS$sp;
class $c_sc_ArrayOps$ArrayIterator$mcV$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcV$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp)
  };
  next$mcV$sp__V() {
    try {
      this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      } else {
        throw e
      }
    }
  };
  next__O() {
    this.next$mcV$sp__V()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcV$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", {
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcV$sp;
class $c_sc_ArrayOps$ArrayIterator$mcZ$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcZ$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp)
  };
  next$mcZ$sp__Z() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uZ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcZ$sp__Z()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", {
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcZ$sp;
const $f_sc_View__toString__T = (function($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
});
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth))
}
class $c_scm_ArrayBuilder$generic extends $c_scm_ArrayBuilder {
  constructor(elementClass) {
    super();
    this.scm_ArrayBuilder$generic__f_elementClass = null;
    this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = false;
    this.scm_ArrayBuilder$generic__f_jsElems = null;
    this.scm_ArrayBuilder$generic__f_elementClass = elementClass;
    $ct_scm_ArrayBuilder__(this);
    this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    this.scm_ArrayBuilder$generic__f_jsElems = []
  };
  addOne__O__scm_ArrayBuilder$generic(elem) {
    const unboxedElem = (this.scm_ArrayBuilder$generic__f_isCharArrayBuilder ? $uC(elem) : ((elem === null) ? this.scm_ArrayBuilder$generic__f_elementClass.jl_Class__f_data.zero : elem));
    this.scm_ArrayBuilder$generic__f_jsElems.push(unboxedElem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuilder$generic(xs) {
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      const elem = it.next__O();
      this.addOne__O__scm_ArrayBuilder$generic(elem)
    };
    return this
  };
  result__O() {
    const x$2 = this.scm_ArrayBuilder$generic__f_elementClass;
    let elemRuntimeClass;
    if ((x$2 === $d_V.getClassOf())) {
      elemRuntimeClass = $d_jl_Void.getClassOf()
    } else {
      const x$4 = this.scm_ArrayBuilder$generic__f_elementClass;
      let $$x1;
      if ((x$4 === $d_sr_Null$.getClassOf())) {
        $$x1 = true
      } else {
        const x$6 = this.scm_ArrayBuilder$generic__f_elementClass;
        $$x1 = (x$6 === $d_sr_Nothing$.getClassOf())
      };
      if ($$x1) {
        elemRuntimeClass = $d_O.getClassOf()
      } else {
        elemRuntimeClass = this.scm_ArrayBuilder$generic__f_elementClass
      }
    };
    return $makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), this.scm_ArrayBuilder$generic__f_jsElems)
  };
  toString__T() {
    return "ArrayBuilder.generic"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ArrayBuilder$generic(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuilder$generic(elem)
  };
}
const $d_scm_ArrayBuilder$generic = new $TypeData().initClass({
  scm_ArrayBuilder$generic: 0
}, false, "scala.collection.mutable.ArrayBuilder$generic", {
  scm_ArrayBuilder$generic: 1,
  scm_ArrayBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuilder$generic.prototype.$classData = $d_scm_ArrayBuilder$generic;
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    const s = ("Future.collect partial function is not defined at: " + t$2);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$1 = new $TypeData().initClass({
  s_concurrent_Future$$anon$1: 0
}, false, "scala.concurrent.Future$$anon$1", {
  s_concurrent_Future$$anon$1: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$1.prototype.$classData = $d_s_concurrent_Future$$anon$1;
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$2 = new $TypeData().initClass({
  s_concurrent_Future$$anon$2: 0
}, false, "scala.concurrent.Future$$anon$2", {
  s_concurrent_Future$$anon$2: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$2.prototype.$classData = $d_s_concurrent_Future$$anon$2;
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
const $d_s_concurrent_Future$$anon$3 = new $TypeData().initClass({
  s_concurrent_Future$$anon$3: 0
}, false, "scala.concurrent.Future$$anon$3", {
  s_concurrent_Future$$anon$3: 1,
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_concurrent_Future$$anon$3.prototype.$classData = $d_s_concurrent_Future$$anon$3;
const $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try = (function($thiz) {
  let _$this = $thiz;
  while (true) {
    const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
    if ((state instanceof $c_s_util_Try)) {
      return $as_s_util_Try(state)
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this)
    } else {
      return null
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks = (function($thiz, state, callbacks) {
  let _$this = $thiz;
  while (true) {
    if ((state instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, callbacks, $as_s_util_Try(state));
      return callbacks
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
      if (_$this.compareAndSet__O__O__Z(state, ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(_$this, callbacks, $as_s_concurrent_impl_Promise$Callbacks(state)) : callbacks))) {
        return callbacks
      } else {
        state = _$this.ju_concurrent_atomic_AtomicReference__f_value
      }
    } else {
      const p = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
      const temp$state$2 = p.ju_concurrent_atomic_AtomicReference__f_value;
      _$this = p;
      state = temp$state$2
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks = (function($thiz, left, right) {
  while (true) {
    if ((left instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks($as_s_concurrent_impl_Promise$Transformation(left), right)
    } else {
      const m = $as_s_concurrent_impl_Promise$ManyCallbacks(left);
      const temp$left = m.s_concurrent_impl_Promise$ManyCallbacks__f_rest;
      const temp$right = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.s_concurrent_impl_Promise$ManyCallbacks__f_first, right);
      left = temp$left;
      right = temp$right
    }
  }
});
const $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V = (function($thiz, callbacks, resolved) {
  while (true) {
    if ((callbacks instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      const m = $as_s_concurrent_impl_Promise$ManyCallbacks(callbacks);
      m.s_concurrent_impl_Promise$ManyCallbacks__f_first.submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved);
      callbacks = m.s_concurrent_impl_Promise$ManyCallbacks__f_rest;
      continue
    } else {
      $as_s_concurrent_impl_Promise$Transformation(callbacks).submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved)
    };
    break
  }
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__O__ = (function($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__ = (function($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(result));
  return $thiz
});
const $ct_s_concurrent_impl_Promise$DefaultPromise__ = (function($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop);
  return $thiz
});
class $c_s_concurrent_impl_Promise$DefaultPromise extends $c_ju_concurrent_atomic_AtomicReference {
  onComplete__F1__s_concurrent_ExecutionContext__V(func, executor) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.ju_concurrent_atomic_AtomicReference__f_value, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor))
  };
  toString__T() {
    let _$this = this;
    while (true) {
      const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((state instanceof $c_s_util_Try)) {
        return (("Future(" + state) + ")")
      } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this)
      } else {
        return "Future(<not completed>)"
      }
    }
  };
  tryComplete__s_util_Try__Z(value) {
    const state = this.ju_concurrent_atomic_AtomicReference__f_value;
    return ((!(state instanceof $c_s_util_Try)) && this.tryComplete0__O__s_util_Try__Z(state, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(value)))
  };
  tryComplete0__O__s_util_Try__Z(state, resolved) {
    let _$this = this;
    while (true) {
      if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        if (_$this.compareAndSet__O__O__Z(state, resolved)) {
          if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, $as_s_concurrent_impl_Promise$Callbacks(state), resolved)
          };
          return true
        } else {
          state = _$this.ju_concurrent_atomic_AtomicReference__f_value
        }
      } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        const p = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
        if ((p !== _$this)) {
          const temp$state$2 = p.ju_concurrent_atomic_AtomicReference__f_value;
          _$this = p;
          state = temp$state$2
        } else {
          return false
        }
      } else {
        return false
      }
    }
  };
  completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise(other) {
    if ((other !== this)) {
      const state = this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((!(state instanceof $c_s_util_Try))) {
        let resolved;
        if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($as_s_concurrent_impl_Promise$DefaultPromise(other))
        } else {
          const this$2 = $m_s_Option$().apply__O__s_Option($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
          $m_s_$less$colon$less$();
          resolved = $as_s_util_Try((this$2.isEmpty__Z() ? null : this$2.get__O()))
        };
        if ((resolved !== null)) {
          this.tryComplete0__O__s_util_Try__Z(state, resolved)
        } else {
          other.onComplete__F1__s_concurrent_ExecutionContext__V(this, $m_s_concurrent_ExecutionContext$parasitic$())
        }
      }
    };
    return this
  };
  linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(target, link) {
    let _$this = this;
    while (true) {
      if ((_$this !== target)) {
        const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
        if ((state instanceof $c_s_util_Try)) {
          if ((!target.tryComplete0__O__s_util_Try__Z(target.ju_concurrent_atomic_AtomicReference__f_value, $as_s_util_Try(state)))) {
            throw new $c_jl_IllegalStateException("Cannot link completed promises together")
          }
        } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
          const l = ((link !== null) ? link : new $c_s_concurrent_impl_Promise$Link(target));
          const p = l.promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          if (((_$this !== p) && _$this.compareAndSet__O__O__Z(state, l))) {
            if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
              $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.ju_concurrent_atomic_AtomicReference__f_value, $as_s_concurrent_impl_Promise$Callbacks(state))
            }
          } else {
            target = p;
            link = l;
            continue
          }
        } else {
          _$this = $as_s_concurrent_impl_Promise$Link(state).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          continue
        }
      };
      break
    }
  };
  unlink__s_util_Try__V(resolved) {
    let _$this = this;
    while (true) {
      const state = _$this.ju_concurrent_atomic_AtomicReference__f_value;
      if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
        const next = (_$this.compareAndSet__O__O__Z(state, resolved) ? $as_s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_impl_Promise$Link(state).ju_concurrent_atomic_AtomicReference__f_value) : _$this);
        _$this = next;
        continue
      } else {
        _$this.tryComplete0__O__s_util_Try__Z(state, resolved)
      };
      break
    }
  };
  apply__O__O(v1) {
    const resolved = $as_s_util_Try(v1);
    this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolved)
  };
}
function $as_s_concurrent_impl_Promise$DefaultPromise(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$DefaultPromise) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise"))
}
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$DefaultPromise)))
}
function $asArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$DefaultPromise;", depth))
}
const $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().initClass({
  s_concurrent_impl_Promise$DefaultPromise: 0
}, false, "scala.concurrent.impl.Promise$DefaultPromise", {
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1,
  F1: 1
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.$classData = $d_s_concurrent_impl_Promise$DefaultPromise;
function $is_s_math_Integral(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_math_Integral)))
}
function $as_s_math_Integral(obj) {
  return (($is_s_math_Integral(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.Integral"))
}
function $isArrayOf_s_math_Integral(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Integral)))
}
function $asArrayOf_s_math_Integral(obj, depth) {
  return (($isArrayOf_s_math_Integral(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.Integral;", depth))
}
class $c_s_math_Ordering$Byte$ extends $c_O {
  compare__O__O__I(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Ordering$Byte$ = new $TypeData().initClass({
  s_math_Ordering$Byte$: 0
}, false, "scala.math.Ordering$Byte$", {
  s_math_Ordering$Byte$: 1,
  O: 1,
  s_math_Ordering$ByteOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Byte$.prototype.$classData = $d_s_math_Ordering$Byte$;
let $n_s_math_Ordering$Byte$ = (void 0);
function $m_s_math_Ordering$Byte$() {
  if ((!$n_s_math_Ordering$Byte$)) {
    $n_s_math_Ordering$Byte$ = new $c_s_math_Ordering$Byte$()
  };
  return $n_s_math_Ordering$Byte$
}
class $c_s_math_Ordering$Char$ extends $c_O {
  compare__O__O__I(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Ordering$Char$ = new $TypeData().initClass({
  s_math_Ordering$Char$: 0
}, false, "scala.math.Ordering$Char$", {
  s_math_Ordering$Char$: 1,
  O: 1,
  s_math_Ordering$CharOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Char$.prototype.$classData = $d_s_math_Ordering$Char$;
let $n_s_math_Ordering$Char$ = (void 0);
function $m_s_math_Ordering$Char$() {
  if ((!$n_s_math_Ordering$Char$)) {
    $n_s_math_Ordering$Char$ = new $c_s_math_Ordering$Char$()
  };
  return $n_s_math_Ordering$Char$
}
class $c_s_math_Ordering$Long$ extends $c_O {
  compare__O__O__I(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(lo, hi, lo$1, hi$1)
  };
}
const $d_s_math_Ordering$Long$ = new $TypeData().initClass({
  s_math_Ordering$Long$: 0
}, false, "scala.math.Ordering$Long$", {
  s_math_Ordering$Long$: 1,
  O: 1,
  s_math_Ordering$LongOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Long$.prototype.$classData = $d_s_math_Ordering$Long$;
let $n_s_math_Ordering$Long$ = (void 0);
function $m_s_math_Ordering$Long$() {
  if ((!$n_s_math_Ordering$Long$)) {
    $n_s_math_Ordering$Long$ = new $c_s_math_Ordering$Long$()
  };
  return $n_s_math_Ordering$Long$
}
class $c_s_math_Ordering$Short$ extends $c_O {
  compare__O__O__I(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Ordering$Short$ = new $TypeData().initClass({
  s_math_Ordering$Short$: 0
}, false, "scala.math.Ordering$Short$", {
  s_math_Ordering$Short$: 1,
  O: 1,
  s_math_Ordering$ShortOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Short$.prototype.$classData = $d_s_math_Ordering$Short$;
let $n_s_math_Ordering$Short$ = (void 0);
function $m_s_math_Ordering$Short$() {
  if ((!$n_s_math_Ordering$Short$)) {
    $n_s_math_Ordering$Short$ = new $c_s_math_Ordering$Short$()
  };
  return $n_s_math_Ordering$Short$
}
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null;
    this.s_reflect_AnyValManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_AnyValManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
const $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V = (function($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    let $$x1;
    if ($thiz.jl_JSConsoleBasedPrintStream__f_isErr) {
      const x = console.error;
      $$x1 = $uZ((!(!x)))
    } else {
      $$x1 = false
    };
    if ($$x1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
});
class $c_jl_JSConsoleBasedPrintStream extends $c_Ljava_io_PrintStream {
  constructor(isErr) {
    super();
    this.jl_JSConsoleBasedPrintStream__f_isErr = false;
    this.jl_JSConsoleBasedPrintStream__f_flushed = false;
    this.jl_JSConsoleBasedPrintStream__f_buffer = null;
    this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
    const out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
    $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
    this.jl_JSConsoleBasedPrintStream__f_flushed = true;
    this.jl_JSConsoleBasedPrintStream__f_buffer = ""
  };
  print__T__V(s) {
    this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s))
  };
  java$lang$JSConsoleBasedPrintStream$$printString__T__V(s) {
    let rest = s;
    while ((rest !== "")) {
      const this$1 = rest;
      const nlPos = $uI(this$1.indexOf("\n"));
      if ((nlPos < 0)) {
        this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
        this.jl_JSConsoleBasedPrintStream__f_flushed = false;
        rest = ""
      } else {
        const $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
        const this$3 = rest;
        $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$3.substring(0, nlPos))));
        this.jl_JSConsoleBasedPrintStream__f_buffer = "";
        this.jl_JSConsoleBasedPrintStream__f_flushed = true;
        const this$4 = rest;
        const beginIndex = ((1 + nlPos) | 0);
        rest = $as_T(this$4.substring(beginIndex))
      }
    }
  };
}
const $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_sci_MapKeyValueTupleHashIterator extends $c_sci_ChampBaseReverseIterator {
  constructor(rootNode) {
    super();
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = 0;
    this.sci_MapKeyValueTupleHashIterator__f_value = null;
    this.sci_MapKeyValueTupleHashIterator__f_key = null;
    $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = 0;
    this.sci_MapKeyValueTupleHashIterator__f_key = new $c_sci_MapKeyValueTupleHashIterator$$anon$1(this)
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  productIterator__sc_Iterator() {
    return new $c_s_Product$$anon$1(this)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  concat__F0__sc_Iterator(xs) {
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs)
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  _1__O() {
    return this.sci_MapKeyValueTupleHashIterator__f_key
  };
  _2__O() {
    return this.sci_MapKeyValueTupleHashIterator__f_value
  };
  productPrefix__T() {
    return "Tuple2"
  };
  next__sci_MapKeyValueTupleHashIterator() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_MapKeyValueTupleHashIterator__f_scala$collection$immutable$MapKeyValueTupleHashIterator$$hash = this.sci_ChampBaseReverseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_MapKeyValueTupleHashIterator__f_value = $as_sci_MapNode(this.sci_ChampBaseReverseIterator__f_currentValueNode).getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
    this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
    return this
  };
  next__O() {
    return this.next__sci_MapKeyValueTupleHashIterator()
  };
}
const $d_sci_MapKeyValueTupleHashIterator = new $TypeData().initClass({
  sci_MapKeyValueTupleHashIterator: 0
}, false, "scala.collection.immutable.MapKeyValueTupleHashIterator", {
  sci_MapKeyValueTupleHashIterator: 1,
  sci_ChampBaseReverseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sci_MapKeyValueTupleHashIterator.prototype.$classData = $d_sci_MapKeyValueTupleHashIterator;
class $c_s_math_BigDecimal {
}
function $as_s_math_BigDecimal(obj) {
  return (((obj instanceof $c_s_math_BigDecimal) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.BigDecimal"))
}
function $isArrayOf_s_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_BigDecimal)))
}
function $asArrayOf_s_math_BigDecimal(obj, depth) {
  return (($isArrayOf_s_math_BigDecimal(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.BigDecimal;", depth))
}
const $f_s_math_Numeric$ByteIsIntegral__plus__B__B__B = (function($thiz, x, y) {
  return ((((x + y) | 0) << 24) >> 24)
});
const $f_s_math_Numeric$ByteIsIntegral__minus__B__B__B = (function($thiz, x, y) {
  return ((((x - y) | 0) << 24) >> 24)
});
const $f_s_math_Numeric$ByteIsIntegral__times__B__B__B = (function($thiz, x, y) {
  return (($imul(x, y) << 24) >> 24)
});
const $f_s_math_Numeric$ByteIsIntegral__quot__B__B__B = (function($thiz, x, y) {
  return (($intDiv(x, y) << 24) >> 24)
});
const $f_s_math_Numeric$ByteIsIntegral__sign__B__B = (function($thiz, x) {
  const x$1 = x;
  return ((((x$1 === 0) ? 0 : ((x$1 < 0) ? (-1) : 1)) << 24) >> 24)
});
const $f_s_math_Numeric$CharIsIntegral__plus__C__C__C = (function($thiz, x, y) {
  return (65535 & ((x + y) | 0))
});
const $f_s_math_Numeric$CharIsIntegral__minus__C__C__C = (function($thiz, x, y) {
  return (65535 & ((x - y) | 0))
});
const $f_s_math_Numeric$CharIsIntegral__times__C__C__C = (function($thiz, x, y) {
  return (65535 & $imul(x, y))
});
const $f_s_math_Numeric$CharIsIntegral__quot__C__C__C = (function($thiz, x, y) {
  return (65535 & $intDiv(x, y))
});
const $f_s_math_Numeric$CharIsIntegral__sign__C__C = (function($thiz, x) {
  const x$1 = x;
  return (65535 & ((x$1 === 0) ? 0 : ((x$1 < 0) ? (-1) : 1)))
});
const $f_s_math_Numeric$IntIsIntegral__plus__I__I__I = (function($thiz, x, y) {
  return ((x + y) | 0)
});
const $f_s_math_Numeric$IntIsIntegral__minus__I__I__I = (function($thiz, x, y) {
  return ((x - y) | 0)
});
const $f_s_math_Numeric$IntIsIntegral__times__I__I__I = (function($thiz, x, y) {
  return $imul(x, y)
});
const $f_s_math_Numeric$IntIsIntegral__quot__I__I__I = (function($thiz, x, y) {
  return $intDiv(x, y)
});
const $f_s_math_Numeric$LongIsIntegral__plus__J__J__J = (function($thiz, x, y) {
  const alo = x.RTLong__f_lo;
  const ahi = x.RTLong__f_hi;
  const bhi = y.RTLong__f_hi;
  const lo = ((alo + y.RTLong__f_lo) | 0);
  const hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  return new $c_RTLong(lo, hi)
});
const $f_s_math_Numeric$LongIsIntegral__minus__J__J__J = (function($thiz, x, y) {
  const alo = x.RTLong__f_lo;
  const ahi = x.RTLong__f_hi;
  const bhi = y.RTLong__f_hi;
  const lo = ((alo - y.RTLong__f_lo) | 0);
  const hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0));
  return new $c_RTLong(lo, hi)
});
const $f_s_math_Numeric$LongIsIntegral__times__J__J__J = (function($thiz, x, y) {
  const alo = x.RTLong__f_lo;
  const blo = y.RTLong__f_lo;
  const a0 = (65535 & alo);
  const a1 = ((alo >>> 16) | 0);
  const b0 = (65535 & blo);
  const b1 = ((blo >>> 16) | 0);
  const a0b0 = $imul(a0, b0);
  const a1b0 = $imul(a1, b0);
  const a0b1 = $imul(a0, b1);
  const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  const hi = (((((((($imul(alo, y.RTLong__f_hi) + $imul(x.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
const $f_s_math_Numeric$LongIsIntegral__quot__J__J__J = (function($thiz, x, y) {
  const this$1 = $m_RTLong$();
  const lo = this$1.divideImpl__I__I__I__I__I(x.RTLong__f_lo, x.RTLong__f_hi, y.RTLong__f_lo, y.RTLong__f_hi);
  const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $c_RTLong(lo, hi)
});
const $f_s_math_Numeric$ShortIsIntegral__plus__S__S__S = (function($thiz, x, y) {
  return ((((x + y) | 0) << 16) >> 16)
});
const $f_s_math_Numeric$ShortIsIntegral__minus__S__S__S = (function($thiz, x, y) {
  return ((((x - y) | 0) << 16) >> 16)
});
const $f_s_math_Numeric$ShortIsIntegral__times__S__S__S = (function($thiz, x, y) {
  return (($imul(x, y) << 16) >> 16)
});
const $f_s_math_Numeric$ShortIsIntegral__quot__S__S__S = (function($thiz, x, y) {
  return (($intDiv(x, y) << 16) >> 16)
});
const $f_s_math_Numeric$ShortIsIntegral__sign__S__S = (function($thiz, x) {
  const x$1 = x;
  return ((((x$1 === 0) ? 0 : ((x$1 < 0) ? (-1) : 1)) << 16) >> 16)
});
class $c_s_math_Ordering$Int$ extends $c_O {
  constructor() {
    super();
    this.s_math_Ordering$Int$__f_scala$math$Ordering$CachedReverse$$_reverse = null;
    $n_s_math_Ordering$Int$ = this;
    this.s_math_Ordering$Int$__f_scala$math$Ordering$CachedReverse$$_reverse = new $c_s_math_Ordering$Reverse(this)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1))
  };
}
const $d_s_math_Ordering$Int$ = new $TypeData().initClass({
  s_math_Ordering$Int$: 0
}, false, "scala.math.Ordering$Int$", {
  s_math_Ordering$Int$: 1,
  O: 1,
  s_math_Ordering$IntOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$CachedReverse: 1
});
$c_s_math_Ordering$Int$.prototype.$classData = $d_s_math_Ordering$Int$;
let $n_s_math_Ordering$Int$ = (void 0);
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$()
  };
  return $n_s_math_Ordering$Int$
}
class $c_s_reflect_ManifestFactory$BooleanManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$ByteManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$CharManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$DoubleManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$FloatManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$IntManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$LongManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$UnitManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
}
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
class $c_sc_MapOps$$anon$1 extends $c_sc_AbstractIterable {
  constructor(outer) {
    super();
    this.sc_MapOps$$anon$1__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.sc_MapOps$$anon$1__f_$outer = outer
    }
  };
  knownSize__I() {
    return this.sc_MapOps$$anon$1__f_$outer.knownSize__I()
  };
  iterator__sc_Iterator() {
    return this.sc_MapOps$$anon$1__f_$outer.valuesIterator__sc_Iterator()
  };
}
const $d_sc_MapOps$$anon$1 = new $TypeData().initClass({
  sc_MapOps$$anon$1: 0
}, false, "scala.collection.MapOps$$anon$1", {
  sc_MapOps$$anon$1: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_MapOps$$anon$1.prototype.$classData = $d_sc_MapOps$$anon$1;
const $f_sc_Set__equals__O__Z = (function($thiz, that) {
  if ($is_sc_Set(that)) {
    const x2 = $as_sc_Set(that);
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $thiz.subsetOf__sc_Set__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
function $is_s_math_Numeric$BigDecimalAsIfIntegral(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_math_Numeric$BigDecimalAsIfIntegral)))
}
function $as_s_math_Numeric$BigDecimalAsIfIntegral(obj) {
  return (($is_s_math_Numeric$BigDecimalAsIfIntegral(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.Numeric$BigDecimalAsIfIntegral"))
}
function $isArrayOf_s_math_Numeric$BigDecimalAsIfIntegral(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Numeric$BigDecimalAsIfIntegral)))
}
function $asArrayOf_s_math_Numeric$BigDecimalAsIfIntegral(obj, depth) {
  return (($isArrayOf_s_math_Numeric$BigDecimalAsIfIntegral(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.Numeric$BigDecimalAsIfIntegral;", depth))
}
class $c_s_reflect_ManifestFactory$AnyManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
let $n_s_reflect_ManifestFactory$AnyManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_ManifestFactory$BooleanManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_ManifestFactory$ByteManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_ManifestFactory$CharManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_ManifestFactory$DoubleManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_ManifestFactory$FloatManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_ManifestFactory$IntManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_ManifestFactory$LongManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_ManifestFactory$ShortManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_ManifestFactory$UnitManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return $as_sc_Iterator(this.sc_View$$anon$1__f_it$1.apply__O())
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
class $c_s_math_Numeric$ByteIsIntegral$ extends $c_O {
  sign__O__O(x) {
    const x$1 = $uB(x);
    return $f_s_math_Numeric$ByteIsIntegral__sign__B__B(this, x$1)
  };
  toInt__O__I(x) {
    const x$1 = $uB(x);
    return x$1
  };
  fromInt__I__O(x) {
    return ((x << 24) >> 24)
  };
  quot__O__O__O(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return $f_s_math_Numeric$ByteIsIntegral__quot__B__B__B(this, x$1, y$1)
  };
  times__O__O__O(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return $f_s_math_Numeric$ByteIsIntegral__times__B__B__B(this, x$1, y$1)
  };
  minus__O__O__O(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return $f_s_math_Numeric$ByteIsIntegral__minus__B__B__B(this, x$1, y$1)
  };
  plus__O__O__O(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return $f_s_math_Numeric$ByteIsIntegral__plus__B__B__B(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uB(x);
    const y$1 = $uB(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Numeric$ByteIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$ByteIsIntegral$: 0
}, false, "scala.math.Numeric$ByteIsIntegral$", {
  s_math_Numeric$ByteIsIntegral$: 1,
  O: 1,
  s_math_Numeric$ByteIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$ByteOrdering: 1
});
$c_s_math_Numeric$ByteIsIntegral$.prototype.$classData = $d_s_math_Numeric$ByteIsIntegral$;
let $n_s_math_Numeric$ByteIsIntegral$ = (void 0);
function $m_s_math_Numeric$ByteIsIntegral$() {
  if ((!$n_s_math_Numeric$ByteIsIntegral$)) {
    $n_s_math_Numeric$ByteIsIntegral$ = new $c_s_math_Numeric$ByteIsIntegral$()
  };
  return $n_s_math_Numeric$ByteIsIntegral$
}
class $c_s_math_Numeric$CharIsIntegral$ extends $c_O {
  sign__O__O(x) {
    const x$1 = $uC(x);
    return $bC($f_s_math_Numeric$CharIsIntegral__sign__C__C(this, x$1))
  };
  toInt__O__I(x) {
    const x$1 = $uC(x);
    return x$1
  };
  fromInt__I__O(x) {
    return $bC((65535 & x))
  };
  quot__O__O__O(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return $bC($f_s_math_Numeric$CharIsIntegral__quot__C__C__C(this, x$1, y$1))
  };
  times__O__O__O(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return $bC($f_s_math_Numeric$CharIsIntegral__times__C__C__C(this, x$1, y$1))
  };
  minus__O__O__O(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return $bC($f_s_math_Numeric$CharIsIntegral__minus__C__C__C(this, x$1, y$1))
  };
  plus__O__O__O(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return $bC($f_s_math_Numeric$CharIsIntegral__plus__C__C__C(this, x$1, y$1))
  };
  compare__O__O__I(x, y) {
    const x$1 = $uC(x);
    const y$1 = $uC(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Numeric$CharIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$CharIsIntegral$: 0
}, false, "scala.math.Numeric$CharIsIntegral$", {
  s_math_Numeric$CharIsIntegral$: 1,
  O: 1,
  s_math_Numeric$CharIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$CharOrdering: 1
});
$c_s_math_Numeric$CharIsIntegral$.prototype.$classData = $d_s_math_Numeric$CharIsIntegral$;
let $n_s_math_Numeric$CharIsIntegral$ = (void 0);
function $m_s_math_Numeric$CharIsIntegral$() {
  if ((!$n_s_math_Numeric$CharIsIntegral$)) {
    $n_s_math_Numeric$CharIsIntegral$ = new $c_s_math_Numeric$CharIsIntegral$()
  };
  return $n_s_math_Numeric$CharIsIntegral$
}
class $c_s_math_Numeric$IntIsIntegral$ extends $c_O {
  sign__O__O(x) {
    const x$1 = $uI(x);
    return ((x$1 === 0) ? 0 : ((x$1 < 0) ? (-1) : 1))
  };
  toInt__O__I(x) {
    const x$1 = $uI(x);
    return x$1
  };
  fromInt__I__O(x) {
    return x
  };
  quot__O__O__O(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return $f_s_math_Numeric$IntIsIntegral__quot__I__I__I(this, x$1, y$1)
  };
  times__O__O__O(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return $f_s_math_Numeric$IntIsIntegral__times__I__I__I(this, x$1, y$1)
  };
  minus__O__O__O(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return $f_s_math_Numeric$IntIsIntegral__minus__I__I__I(this, x$1, y$1)
  };
  plus__O__O__O(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uI(x);
    const y$1 = $uI(y);
    return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1))
  };
}
const $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$IntIsIntegral$: 0
}, false, "scala.math.Numeric$IntIsIntegral$", {
  s_math_Numeric$IntIsIntegral$: 1,
  O: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
});
$c_s_math_Numeric$IntIsIntegral$.prototype.$classData = $d_s_math_Numeric$IntIsIntegral$;
let $n_s_math_Numeric$IntIsIntegral$ = (void 0);
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$()
  };
  return $n_s_math_Numeric$IntIsIntegral$
}
class $c_s_math_Numeric$LongIsIntegral$ extends $c_O {
  sign__O__O(x) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    return $m_s_math_package$().signum__J__J(new $c_RTLong(lo, hi))
  };
  toInt__O__I(x) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    return lo
  };
  fromInt__I__O(x) {
    const hi = (x >> 31);
    return new $c_RTLong(x, hi)
  };
  quot__O__O__O(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $f_s_math_Numeric$LongIsIntegral__quot__J__J__J(this, new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1))
  };
  times__O__O__O(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $f_s_math_Numeric$LongIsIntegral__times__J__J__J(this, new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1))
  };
  minus__O__O__O(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $f_s_math_Numeric$LongIsIntegral__minus__J__J__J(this, new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1))
  };
  plus__O__O__O(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $f_s_math_Numeric$LongIsIntegral__plus__J__J__J(this, new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1))
  };
  compare__O__O__I(x, y) {
    const t = $uJ(x);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const t$1 = $uJ(y);
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(lo, hi, lo$1, hi$1)
  };
}
const $d_s_math_Numeric$LongIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$LongIsIntegral$: 0
}, false, "scala.math.Numeric$LongIsIntegral$", {
  s_math_Numeric$LongIsIntegral$: 1,
  O: 1,
  s_math_Numeric$LongIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$LongOrdering: 1
});
$c_s_math_Numeric$LongIsIntegral$.prototype.$classData = $d_s_math_Numeric$LongIsIntegral$;
let $n_s_math_Numeric$LongIsIntegral$ = (void 0);
function $m_s_math_Numeric$LongIsIntegral$() {
  if ((!$n_s_math_Numeric$LongIsIntegral$)) {
    $n_s_math_Numeric$LongIsIntegral$ = new $c_s_math_Numeric$LongIsIntegral$()
  };
  return $n_s_math_Numeric$LongIsIntegral$
}
class $c_s_math_Numeric$ShortIsIntegral$ extends $c_O {
  sign__O__O(x) {
    const x$1 = $uS(x);
    return $f_s_math_Numeric$ShortIsIntegral__sign__S__S(this, x$1)
  };
  toInt__O__I(x) {
    const x$1 = $uS(x);
    return x$1
  };
  fromInt__I__O(x) {
    return ((x << 16) >> 16)
  };
  quot__O__O__O(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return $f_s_math_Numeric$ShortIsIntegral__quot__S__S__S(this, x$1, y$1)
  };
  times__O__O__O(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return $f_s_math_Numeric$ShortIsIntegral__times__S__S__S(this, x$1, y$1)
  };
  minus__O__O__O(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return $f_s_math_Numeric$ShortIsIntegral__minus__S__S__S(this, x$1, y$1)
  };
  plus__O__O__O(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return $f_s_math_Numeric$ShortIsIntegral__plus__S__S__S(this, x$1, y$1)
  };
  compare__O__O__I(x, y) {
    const x$1 = $uS(x);
    const y$1 = $uS(y);
    return ((x$1 - y$1) | 0)
  };
}
const $d_s_math_Numeric$ShortIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$ShortIsIntegral$: 0
}, false, "scala.math.Numeric$ShortIsIntegral$", {
  s_math_Numeric$ShortIsIntegral$: 1,
  O: 1,
  s_math_Numeric$ShortIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$ShortOrdering: 1
});
$c_s_math_Numeric$ShortIsIntegral$.prototype.$classData = $d_s_math_Numeric$ShortIsIntegral$;
let $n_s_math_Numeric$ShortIsIntegral$ = (void 0);
function $m_s_math_Numeric$ShortIsIntegral$() {
  if ((!$n_s_math_Numeric$ShortIsIntegral$)) {
    $n_s_math_Numeric$ShortIsIntegral$ = new $c_s_math_Numeric$ShortIsIntegral$()
  };
  return $n_s_math_Numeric$ShortIsIntegral$
}
const $ct_Lorg_scalajs_dom_ext_EasySeq__I__F1__ = (function($thiz, jsLength, jsApply) {
  $thiz.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsLength = jsLength;
  $thiz.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsApply = jsApply;
  return $thiz
});
class $c_Lorg_scalajs_dom_ext_EasySeq extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsLength = 0;
    this.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsApply = null
  };
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_Lorg_scalajs_dom_ext_EasySeq$$anon$1(this);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
  };
  className__T() {
    return "Seq"
  };
  head__O() {
    return new $c_Lorg_scalajs_dom_ext_EasySeq$$anon$1(this).next__O()
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  length__I() {
    return this.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsLength
  };
  apply__I__O(x) {
    return this.Lorg_scalajs_dom_ext_EasySeq__f_org$scalajs$dom$ext$EasySeq$$jsApply.apply__O__O(x)
  };
  iterator__sc_Iterator() {
    return new $c_Lorg_scalajs_dom_ext_EasySeq$$anon$1(this)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sc_Seq$();
    return this$1.from__sc_IterableOnce__sc_SeqOps(coll)
  };
  isDefinedAt__O__Z(x) {
    const idx = $uI(x);
    return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
class $c_sc_AbstractSet extends $c_sc_AbstractIterable {
  equals__O__Z(that) {
    return $f_sc_Set__equals__O__Z(this, that)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
  };
  stringPrefix__T() {
    return "Set"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  subsetOf__sc_Set__Z(that) {
    return this.forall__F1__Z(that)
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
}
const $f_sc_Map__equals__O__Z = (function($thiz, o) {
  if ($is_sc_Map(o)) {
    const x2 = $as_sc_Map(o);
    if (($thiz === x2)) {
      return true
    } else if (($thiz.size__I() === x2.size__I())) {
      try {
        let res = true;
        const it = $thiz.iterator__sc_Iterator();
        while ((res && it.hasNext__Z())) {
          const arg1 = it.next__O();
          const x0$1 = $as_T2(arg1);
          if ((x0$1 === null)) {
            throw new $c_s_MatchError(x0$1)
          };
          const k = x0$1.T2__f__1;
          const v = x0$1.T2__f__2;
          res = $m_sr_BoxesRunTime$().equals__O__O__Z(x2.getOrElse__O__F0__O(k, new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinel))($thiz))), v)
        };
        return res
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false
        } else {
          throw e
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
class $c_Lorg_scalajs_dom_ext_package$PimpedHtmlCollection extends $c_Lorg_scalajs_dom_ext_EasySeq {
  constructor(coll) {
    super();
    $ct_Lorg_scalajs_dom_ext_EasySeq__I__F1__(this, $uI(coll.length), new $c_sjsr_AnonFunction1(((coll$1) => ((index$2) => {
      const index = $uI(index$2);
      return coll$1[index]
    }))(coll)))
  };
}
const $d_Lorg_scalajs_dom_ext_package$PimpedHtmlCollection = new $TypeData().initClass({
  Lorg_scalajs_dom_ext_package$PimpedHtmlCollection: 0
}, false, "org.scalajs.dom.ext.package$PimpedHtmlCollection", {
  Lorg_scalajs_dom_ext_package$PimpedHtmlCollection: 1,
  Lorg_scalajs_dom_ext_EasySeq: 1,
  O: 1,
  sc_Seq: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1
});
$c_Lorg_scalajs_dom_ext_package$PimpedHtmlCollection.prototype.$classData = $d_Lorg_scalajs_dom_ext_package$PimpedHtmlCollection;
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  isDefinedAt__I__Z(idx) {
    return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
  };
  isDefinedAt__O__Z(x) {
    return this.isDefinedAt__I__Z($uI(x))
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
const $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V = (function($thiz, t, e) {
  const wasInterrupted = (t instanceof $c_jl_InterruptedException);
  if ((wasInterrupted || $m_s_util_control_NonFatal$().apply__jl_Throwable__Z(t))) {
    const completed = $thiz.tryComplete0__O__s_util_Try__Z($thiz.ju_concurrent_atomic_AtomicReference__f_value, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(new $c_s_util_Failure(t)));
    if ((completed && wasInterrupted)) {
      const this$1 = $m_jl_Thread$().jl_Thread$__f_SingleThread;
      this$1.jl_Thread__f_java$lang$Thread$$interruptedState = true
    };
    if (((($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 5) || ($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 6)) || (!completed))) {
      e.reportFailure__jl_Throwable__V(t)
    }
  } else {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(t)
  }
});
const $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__ = (function($thiz, _fun, _ec, _arg, _xform) {
  $thiz.s_concurrent_impl_Promise$Transformation__f__fun = _fun;
  $thiz.s_concurrent_impl_Promise$Transformation__f__ec = _ec;
  $thiz.s_concurrent_impl_Promise$Transformation__f__arg = _arg;
  $thiz.s_concurrent_impl_Promise$Transformation__f__xform = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz
});
const $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__ = (function($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz
});
class $c_s_concurrent_impl_Promise$Transformation extends $c_s_concurrent_impl_Promise$DefaultPromise {
  constructor() {
    super();
    this.s_concurrent_impl_Promise$Transformation__f__fun = null;
    this.s_concurrent_impl_Promise$Transformation__f__ec = null;
    this.s_concurrent_impl_Promise$Transformation__f__arg = null;
    this.s_concurrent_impl_Promise$Transformation__f__xform = 0
  };
  submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved) {
    this.s_concurrent_impl_Promise$Transformation__f__arg = resolved;
    const e = this.s_concurrent_impl_Promise$Transformation__f__ec;
    try {
      e.execute__jl_Runnable__V(this)
    } catch (e$2) {
      const e$3 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e$2);
      if ((e$3 !== null)) {
        this.s_concurrent_impl_Promise$Transformation__f__fun = null;
        this.s_concurrent_impl_Promise$Transformation__f__arg = null;
        this.s_concurrent_impl_Promise$Transformation__f__ec = null;
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e)
      } else {
        throw e$2
      }
    };
    return this
  };
  run__V() {
    const v = this.s_concurrent_impl_Promise$Transformation__f__arg;
    const fun = this.s_concurrent_impl_Promise$Transformation__f__fun;
    const ec = this.s_concurrent_impl_Promise$Transformation__f__ec;
    this.s_concurrent_impl_Promise$Transformation__f__fun = null;
    this.s_concurrent_impl_Promise$Transformation__f__arg = null;
    this.s_concurrent_impl_Promise$Transformation__f__ec = null;
    try {
      const x1 = this.s_concurrent_impl_Promise$Transformation__f__xform;
      let resolvedResult;
      switch (x1) {
        case 0: {
          resolvedResult = null;
          break
        }
        case 1: {
          resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success(fun.apply__O__O(v.get__O())) : v);
          break
        }
        case 2: {
          if ((v instanceof $c_s_util_Success)) {
            const f = fun.apply__O__O(v.get__O());
            if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
              $as_s_concurrent_impl_Promise$DefaultPromise(f).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null)
            } else {
              this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f))
            };
            resolvedResult = null
          } else {
            resolvedResult = v
          };
          break
        }
        case 3: {
          resolvedResult = $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try($as_s_util_Try(fun.apply__O__O(v)));
          break
        }
        case 4: {
          const f$2 = fun.apply__O__O(v);
          if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            $as_s_concurrent_impl_Promise$DefaultPromise(f$2).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null)
          } else {
            this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f$2))
          };
          resolvedResult = null;
          break
        }
        case 5: {
          v.foreach__F1__V(fun);
          resolvedResult = null;
          break
        }
        case 6: {
          fun.apply__O__O(v);
          resolvedResult = null;
          break
        }
        case 7: {
          resolvedResult = ((v instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(v.recover__s_PartialFunction__s_util_Try($as_s_PartialFunction(fun))) : v);
          break
        }
        case 8: {
          if ((v instanceof $c_s_util_Failure)) {
            const f$3 = $as_s_concurrent_Future($as_s_PartialFunction(fun).applyOrElse__O__F1__O($as_s_util_Failure(v).s_util_Failure__f_exception, $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailed));
            resolvedResult = ((f$3 !== $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? $as_s_concurrent_impl_Promise$DefaultPromise(f$3).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null) : this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise(f$3)), null) : v)
          } else {
            resolvedResult = v
          };
          break
        }
        case 9: {
          resolvedResult = (((v instanceof $c_s_util_Failure) || $uZ(fun.apply__O__O(v.get__O()))) ? v : $m_s_concurrent_Future$().s_concurrent_Future$__f_filterFailure);
          break
        }
        case 10: {
          resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success($as_s_PartialFunction(fun).applyOrElse__O__F1__O(v.get__O(), $m_s_concurrent_Future$().s_concurrent_Future$__f_collectFailed)) : v);
          break
        }
        default: {
          resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.s_concurrent_impl_Promise$Transformation__f__xform)))
        }
      };
      if ((resolvedResult !== null)) {
        this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolvedResult)
      }
    } catch (e) {
      const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
      if ((e$2 !== null)) {
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$2, ec)
      } else {
        throw e
      }
    }
  };
}
function $as_s_concurrent_impl_Promise$Transformation(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$Transformation) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Transformation"))
}
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$Transformation)))
}
function $asArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$Transformation;", depth))
}
const $d_s_concurrent_impl_Promise$Transformation = new $TypeData().initClass({
  s_concurrent_impl_Promise$Transformation: 0
}, false, "scala.concurrent.impl.Promise$Transformation", {
  s_concurrent_impl_Promise$Transformation: 1,
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1,
  F1: 1,
  s_concurrent_impl_Promise$Callbacks: 1,
  jl_Runnable: 1,
  s_concurrent_Batchable: 1,
  s_concurrent_OnCompleteRunnable: 1
});
$c_s_concurrent_impl_Promise$Transformation.prototype.$classData = $d_s_concurrent_impl_Promise$Transformation;
class $c_sc_AbstractMap extends $c_sc_AbstractIterable {
  equals__O__Z(o) {
    return $f_sc_Map__equals__O__Z(this, o)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_mapSeed)
  };
  stringPrefix__T() {
    return "Map"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1)
  };
  valuesIterator__sc_Iterator() {
    return new $c_sc_MapOps$$anon$3(this)
  };
  isDefinedAt__O__Z(key) {
    return this.contains__O__Z(key)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $as_sc_IterableOps(this.mapFactory__sc_MapFactory().from__sc_IterableOnce__O(coll))
  };
}
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)))
}
function $as_sci_Map(obj) {
  return (($is_sci_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map"))
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map)))
}
function $asArrayOf_sci_Map(obj, depth) {
  return (($isArrayOf_sci_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map;", depth))
}
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
class $c_sci_AbstractSet extends $c_sc_AbstractSet {
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Set$()
  };
}
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.get(n)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
class $c_sci_AbstractMap extends $c_sc_AbstractMap {
  mapFactory__sc_MapFactory() {
    return $m_sci_Map$()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Iterable$()
  };
}
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_sci_Set$EmptySet$ extends $c_sci_AbstractSet {
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  knownSize__I() {
    return 0
  };
  subsetOf__sc_Set__Z(that) {
    return true
  };
  contains__O__Z(elem) {
    return false
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  incl__O__sci_SetOps(elem) {
    return new $c_sci_Set$Set1(elem)
  };
}
const $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
let $n_sci_Set$EmptySet$ = (void 0);
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return $uI(this$1.length)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = $as_sc_StringView(x$1);
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sc_StringView(obj) {
  return (((obj instanceof $c_sc_StringView) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StringView"))
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
function $asArrayOf_sc_StringView(obj, depth) {
  return (($isArrayOf_sc_StringView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StringView;", depth))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_sci_Set$Set1 extends $c_sci_AbstractSet {
  constructor(elem1) {
    super();
    this.sci_Set$Set1__f_elem1 = null;
    this.sci_Set$Set1__f_elem1 = elem1
  };
  size__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 1
  };
  contains__O__Z(elem) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sci_Set$Set1__f_elem1;
    return new $c_sc_Iterator$$anon$20(a)
  };
  forall__F1__Z(p) {
    return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
  };
  head__O() {
    return this.sci_Set$Set1__f_elem1
  };
  tail__O() {
    return $m_sci_Set$EmptySet$()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
class $c_sci_Set$Set2 extends $c_sci_AbstractSet {
  constructor(elem1, elem2) {
    super();
    this.sci_Set$Set2__f_elem1 = null;
    this.sci_Set$Set2__f_elem2 = null;
    this.sci_Set$Set2__f_elem1 = elem1;
    this.sci_Set$Set2__f_elem2 = elem2
  };
  size__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 2
  };
  contains__O__Z(elem) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$2 = this.sci_Set$Set2__f_elem1;
    const rassoc$1 = this.sci_Set$Set2__f_elem2;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$1, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$2, this$2);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$3)
  };
  forall__F1__Z(p) {
    return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
  };
  head__O() {
    return this.sci_Set$Set2__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem2)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
class $c_sci_Set$Set3 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3) {
    super();
    this.sci_Set$Set3__f_elem1 = null;
    this.sci_Set$Set3__f_elem2 = null;
    this.sci_Set$Set3__f_elem3 = null;
    this.sci_Set$Set3__f_elem1 = elem1;
    this.sci_Set$Set3__f_elem2 = elem2;
    this.sci_Set$Set3__f_elem3 = elem3
  };
  size__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 3
  };
  contains__O__Z(elem) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$5 = this.sci_Set$Set3__f_elem1;
    const rassoc$4 = this.sci_Set$Set3__f_elem2;
    const rassoc$3 = this.sci_Set$Set3__f_elem3;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$3, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$4, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$5, this$3);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$4)
  };
  forall__F1__Z(p) {
    return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
  };
  head__O() {
    return this.sci_Set$Set3__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
class $c_sci_Set$Set4 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3, elem4) {
    super();
    this.sci_Set$Set4__f_elem1 = null;
    this.sci_Set$Set4__f_elem2 = null;
    this.sci_Set$Set4__f_elem3 = null;
    this.sci_Set$Set4__f_elem4 = null;
    this.sci_Set$Set4__f_elem1 = elem1;
    this.sci_Set$Set4__f_elem2 = elem2;
    this.sci_Set$Set4__f_elem3 = elem3;
    this.sci_Set$Set4__f_elem4 = elem4
  };
  size__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 4
  };
  contains__O__Z(elem) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
  };
  incl__O__sci_Set(elem) {
    if (this.contains__O__Z(elem)) {
      return this
    } else {
      const this$1 = $m_sci_HashSet$();
      const this$2 = this$1.sci_HashSet$__f_EmptySet;
      const elem$1 = this.sci_Set$Set4__f_elem1;
      const this$3 = this$2.incl__O__sci_HashSet(elem$1);
      const elem$2 = this.sci_Set$Set4__f_elem2;
      const this$4 = this$3.incl__O__sci_HashSet(elem$2);
      const elem$3 = this.sci_Set$Set4__f_elem3;
      const this$5 = this$4.incl__O__sci_HashSet(elem$3);
      const elem$4 = this.sci_Set$Set4__f_elem4;
      const this$6 = this$5.incl__O__sci_HashSet(elem$4);
      return this$6.incl__O__sci_HashSet(elem)
    }
  };
  iterator__sc_Iterator() {
    const rassoc$9 = this.sci_Set$Set4__f_elem1;
    const rassoc$8 = this.sci_Set$Set4__f_elem2;
    const rassoc$7 = this.sci_Set$Set4__f_elem3;
    const rassoc$6 = this.sci_Set$Set4__f_elem4;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$6, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$7, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$8, this$3);
    const this$5 = new $c_sci_$colon$colon(rassoc$9, this$4);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$5)
  };
  forall__F1__Z(p) {
    return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
  };
  head__O() {
    return this.sci_Set$Set4__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4)
  };
  buildTo__scm_Builder__scm_Builder(builder) {
    return $as_scm_Builder(builder.addOne__O__scm_Growable(this.sci_Set$Set4__f_elem1).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem2).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem3).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem4))
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
function $as_sci_Set$Set4(obj) {
  return (((obj instanceof $c_sci_Set$Set4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set4"))
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
function $asArrayOf_sci_Set$Set4(obj, depth) {
  return (($isArrayOf_sci_Set$Set4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set4;", depth))
}
const $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $is_sci_SortedSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_SortedSet)))
}
function $as_sci_SortedSet(obj) {
  return (($is_sci_SortedSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SortedSet"))
}
function $isArrayOf_sci_SortedSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SortedSet)))
}
function $asArrayOf_sci_SortedSet(obj, depth) {
  return (($isArrayOf_sci_SortedSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SortedSet;", depth))
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_sci_Map$EmptyMap$ extends $c_sci_AbstractMap {
  size__I() {
    return 0
  };
  knownSize__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  apply__O__E(key) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  };
  contains__O__Z(key) {
    return false
  };
  getOrElse__O__F0__O(key, default$1) {
    return default$1.apply__O()
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  updated__O__O__sci_MapOps(key, value) {
    return new $c_sci_Map$Map1(key, value)
  };
  apply__O__O(key) {
    this.apply__O__E(key)
  };
}
const $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
let $n_sci_Map$EmptyMap$ = (void 0);
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
class $c_sci_Map$Map1 extends $c_sci_AbstractMap {
  constructor(key1, value1) {
    super();
    this.sci_Map$Map1__f_key1 = null;
    this.sci_Map$Map1__f_value1 = null;
    this.sci_Map$Map1__f_key1 = key1;
    this.sci_Map$Map1__f_value1 = value1
  };
  size__I() {
    return 1
  };
  knownSize__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
      return this.sci_Map$Map1__f_value1
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
    return new $c_sc_Iterator$$anon$20(a)
  };
  valuesIterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sci_Map$Map1__f_value1;
    return new $c_sc_Iterator$$anon$20(a)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
class $c_sci_Map$Map2 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2) {
    super();
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
    this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2
  };
  size__I() {
    return 2
  };
  knownSize__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
      return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : default$1.apply__O()))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map2$$anon$1(this)
  };
  valuesIterator__sc_Iterator() {
    return new $c_sci_Map$Map2$$anon$3(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2))
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
class $c_sci_Map$Map3 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3) {
    super();
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
    this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3
  };
  size__I() {
    return 3
  };
  knownSize__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
      return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : default$1.apply__O())))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map3$$anon$4(this)
  };
  valuesIterator__sc_Iterator() {
    return new $c_sci_Map$Map3$$anon$6(this)
  };
  updated__O__O__sci_Map(key, value) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))))
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2));
    f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3))
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
const $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
class $c_sci_Map$Map4 extends $c_sci_AbstractMap {
  constructor(key1, value1, key2, value2, key3, value3, key4, value4) {
    super();
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
    this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4
  };
  size__I() {
    return 4
  };
  knownSize__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  apply__O__O(key) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
    }
  };
  contains__O__Z(key) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4))
  };
  getOrElse__O__F0__O(key, default$1) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : default$1.apply__O()))))
  };
  iterator__sc_Iterator() {
    return new $c_sci_Map$Map4$$anon$7(this)
  };
  valuesIterator__sc_Iterator() {
    return new $c_sci_Map$Map4$$anon$9(this)
  };
  updated__O__O__sci_Map(key, value) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
      return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value)
    } else {
      const this$1 = $m_sci_HashMap$();
      return this$1.sci_HashMap$__f_EmptyMap.updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4).updated__O__O__sci_HashMap(key, value)
    }
  };
  foreach__F1__V(f) {
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3));
    f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4))
  };
  buildTo__sci_HashMapBuilder__sci_HashMapBuilder(builder) {
    return builder.addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_Map(key, value)
  };
}
function $as_sci_Map$Map4(obj) {
  return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"))
}
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)))
}
function $asArrayOf_sci_Map$Map4(obj, depth) {
  return (($isArrayOf_sci_Map$Map4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth))
}
const $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
const $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet = (function($thiz, newRootNode) {
  return (($thiz.sci_HashSet__f_rootNode === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode))
});
class $c_sci_HashSet extends $c_sci_AbstractSet {
  constructor(rootNode) {
    super();
    this.sci_HashSet__f_rootNode = null;
    this.sci_HashSet__f_rootNode = rootNode
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_HashSet$()
  };
  knownSize__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  size__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_SetIterator(this.sci_HashSet__f_rootNode))
  };
  contains__O__Z(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    return this.sci_HashSet__f_rootNode.contains__O__I__I__I__Z(element, elementUnimprovedHash, elementHash, 0)
  };
  incl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  excl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = $as_sci_HashSet(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashSet__f_rootNode;
        const x$2 = x2.sci_HashSet__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Set__equals__O__Z(this, that)
    }
  };
  className__T() {
    return "HashSet"
  };
  hashCode__I() {
    const it = new $c_sci_SetHashIterator(this.sci_HashSet__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(it, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_setSeed);
    return hash
  };
  drop__I__O(n) {
    return $as_sci_HashSet($f_sc_IterableOps__drop__I__O(this, n))
  };
  tail__O() {
    const elem = this.iterator__sc_Iterator().next__O();
    return this.excl__O__sci_HashSet(elem)
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_HashSet(elem)
  };
}
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
const $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sci_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    const res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O());
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        const this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = $as_sci_LazyList(elem);
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            const this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = $as_sci_LazyList(elem);
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = $as_sci_LazyList(elem);
      const b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = $as_sci_LazyList(elem);
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = $as_sci_LazyList(elem);
        const b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = $as_sci_LazyList(elem);
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  className__T() {
    return "LazyList"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
const $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    if ($thiz.tailDefined__Z()) {
      let scout = $as_sci_Stream($thiz.tail__O());
      if (($as_sci_Stream(elem) !== scout)) {
        elem = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while ((($as_sci_Stream(elem) !== scout) && scout.tailDefined__Z())) {
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
            const obj$1 = $as_sci_Stream(elem).head__O();
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
            elem = $as_sci_Stream($as_sci_Stream(elem).tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$2 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        const this$2 = $as_sci_Stream(elem);
        if ((!this$2.isEmpty__Z())) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$3 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3)
        }
      } else {
        let runner = $thiz;
        let k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if ((($as_sci_Stream(elem) === scout) && (k > 0))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$4 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        };
        while (($as_sci_Stream(elem) !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$5 = $as_sci_Stream(elem).head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$5);
          elem = $as_sci_Stream($as_sci_Stream(elem).tail__O())
        }
      }
    };
    const this$3 = $as_sci_Stream(elem);
    if ((!this$3.isEmpty__Z())) {
      if ((!$as_sci_Stream(elem).tailDefined__Z())) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      } else {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
      }
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_Stream extends $c_sci_AbstractSeq {
  stringPrefix__T() {
    return "LinearSeq"
  };
  iterator__sc_Iterator() {
    return $f_sc_LinearSeqOps__iterator__sc_Iterator(this)
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  className__T() {
    return "Stream"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_Stream();
    $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "Stream"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Stream$()
  };
}
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = $uI(this$1.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(o);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(other);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    const this$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$2, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  applyOrElse__O__F1__O(x, default$1) {
    return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
  };
  head__O() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1).next__O()
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  isDefinedAt__O__Z(x) {
    const idx = $uI(x);
    return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjsr_WrappedVarArgs$()
  };
}
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
class $c_sci_HashMap extends $c_sci_AbstractMap {
  constructor(rootNode) {
    super();
    this.sci_HashMap__f_rootNode = null;
    this.sci_HashMap__f_rootNode = rootNode
  };
  mapFactory__sc_MapFactory() {
    return $m_sci_HashMap$()
  };
  knownSize__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  size__I() {
    return this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashMap__f_rootNode.sci_BitmapIndexedMapNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode))
  };
  valuesIterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapValueIterator(this.sci_HashMap__f_rootNode))
  };
  contains__O__Z(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0)
  };
  apply__O__O(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0)
  };
  getOrElse__O__F0__O(key, default$1) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
    return this.sci_HashMap__f_rootNode.getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1)
  };
  updated__O__O__sci_HashMap(key, value) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  removed__O__sci_HashMap(key) {
    const keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
    const newRootNode = this.sci_HashMap__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedMapNode(key, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0);
    return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode))
  };
  tail__sci_HashMap() {
    const key = $as_T2(this.iterator__sc_Iterator().next__O()).T2__f__1;
    return this.removed__O__sci_HashMap(key)
  };
  foreach__F1__V(f) {
    this.sci_HashMap__f_rootNode.foreach__F1__V(f)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashMap)) {
      const x2 = $as_sci_HashMap(that);
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashMap__f_rootNode;
        const x$2 = x2.sci_HashMap__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Map__equals__O__Z(this, that)
    }
  };
  hashCode__I() {
    const hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
    return hash
  };
  className__T() {
    return "HashMap"
  };
  drop__I__O(n) {
    return $as_sci_HashMap($f_sc_IterableOps__drop__I__O(this, n))
  };
  head__O() {
    return $as_T2(this.iterator__sc_Iterator().next__O())
  };
  tail__O() {
    return this.tail__sci_HashMap()
  };
  updated__O__O__sci_MapOps(key, value) {
    return this.updated__O__O__sci_HashMap(key, value)
  };
}
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
const $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sci_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
class $c_sci_Stream$Cons extends $c_sci_Stream {
  constructor(head, tl) {
    super();
    this.sci_Stream$Cons__f_head = null;
    this.sci_Stream$Cons__f_tlVal = null;
    this.sci_Stream$Cons__f_tlGen = null;
    this.sci_Stream$Cons__f_head = head;
    this.sci_Stream$Cons__f_tlGen = tl
  };
  head__O() {
    return this.sci_Stream$Cons__f_head
  };
  isEmpty__Z() {
    return false
  };
  tailDefined__Z() {
    return (this.sci_Stream$Cons__f_tlGen === null)
  };
  tail__sci_Stream() {
    if ((!this.tailDefined__Z())) {
      if ((!this.tailDefined__Z())) {
        this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
        this.sci_Stream$Cons__f_tlGen = null
      }
    };
    return this.sci_Stream$Cons__f_tlVal
  };
  force__sci_Stream$Cons() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      these = $as_sci_Stream(these.tail__O())
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if (these.isEmpty__Z()) {
        return this
      };
      these = $as_sci_Stream(these.tail__O());
      if ((these === those)) {
        return this
      };
      those = $as_sci_Stream(those.tail__O())
    };
    return this
  };
  force__sci_Stream() {
    return this.force__sci_Stream$Cons()
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
}
const $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
class $c_sci_Stream$Empty$ extends $c_sci_Stream {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
  };
  tail__sci_Stream() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty stream")
  };
  knownSize__I() {
    return 0
  };
  tailDefined__Z() {
    return false
  };
  force__sci_Stream() {
    return this
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
let $n_sci_Stream$Empty$ = (void 0);
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
}
const $p_sci_NumericRange__length$lzycompute__I = (function($thiz) {
  if (((((1 & $thiz.sci_NumericRange__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.sci_NumericRange__f_length = $m_sci_NumericRange$().count__O__O__O__Z__s_math_Integral__I($thiz.sci_NumericRange__f_start, $thiz.sci_NumericRange__f_end, $thiz.sci_NumericRange__f_step, $thiz.sci_NumericRange__f_isInclusive, $thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num);
    $thiz.sci_NumericRange__f_bitmap$0 = (((1 | $thiz.sci_NumericRange__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.sci_NumericRange__f_length
});
const $p_sci_NumericRange__locationAfterN__I__O = (function($thiz, n) {
  const this$1 = $thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num;
  const lhs = $thiz.sci_NumericRange__f_start;
  const $$x1 = new $c_s_math_Integral$IntegralOps(this$1, lhs);
  const this$2 = $thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num;
  const lhs$1 = $thiz.sci_NumericRange__f_step;
  return $$x1.$plus__O__O(new $c_s_math_Integral$IntegralOps(this$2, lhs$1).$times__O__O($thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num.fromInt__I__O(n)))
});
const $p_sci_NumericRange__newEmptyRange__O__sci_NumericRange$Exclusive = (function($thiz, value) {
  $m_sci_NumericRange$();
  const step = $thiz.sci_NumericRange__f_step;
  const num = $thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num;
  return new $c_sci_NumericRange$Exclusive(value, value, step, num)
});
const $p_sci_NumericRange__hashCode$lzycompute__I = (function($thiz) {
  if (((((2 & $thiz.sci_NumericRange__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.sci_NumericRange__f_hashCode = $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I($thiz);
    $thiz.sci_NumericRange__f_bitmap$0 = (((2 | $thiz.sci_NumericRange__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.sci_NumericRange__f_hashCode
});
const $ct_sci_NumericRange__O__O__O__Z__s_math_Integral__ = (function($thiz, start, end, step, isInclusive, num) {
  $thiz.sci_NumericRange__f_start = start;
  $thiz.sci_NumericRange__f_end = end;
  $thiz.sci_NumericRange__f_step = step;
  $thiz.sci_NumericRange__f_isInclusive = isInclusive;
  $thiz.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num = num;
  return $thiz
});
class $c_sci_NumericRange extends $c_sci_AbstractSeq {
  constructor() {
    super();
    this.sci_NumericRange__f_length = 0;
    this.sci_NumericRange__f_hashCode = 0;
    this.sci_NumericRange__f_start = null;
    this.sci_NumericRange__f_end = null;
    this.sci_NumericRange__f_step = null;
    this.sci_NumericRange__f_isInclusive = false;
    this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num = null;
    this.sci_NumericRange__f_bitmap$0 = 0
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  iterator__sc_Iterator() {
    return new $c_sci_NumericRange$NumericRangeIterator(this, this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num)
  };
  length__I() {
    return (((((1 & this.sci_NumericRange__f_bitmap$0) << 24) >> 24) === 0) ? $p_sci_NumericRange__length$lzycompute__I(this) : this.sci_NumericRange__f_length)
  };
  isEmpty__Z() {
    return (this.length__I() === 0)
  };
  last__O() {
    return ((this.length__I() === 0) ? $m_sci_Nil$().head__E() : $p_sci_NumericRange__locationAfterN__I__O(this, (((-1) + this.length__I()) | 0)))
  };
  head__O() {
    return (this.isEmpty__Z() ? $m_sci_Nil$().head__E() : this.sci_NumericRange__f_start)
  };
  tail__sci_NumericRange() {
    if (this.isEmpty__Z()) {
      $m_sci_Nil$().tail__E()
    } else if (this.sci_NumericRange__f_isInclusive) {
      const this$1 = this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num;
      const lhs = this.sci_NumericRange__f_start;
      return new $c_sci_NumericRange$Inclusive(new $c_s_math_Integral$IntegralOps(this$1, lhs).$plus__O__O(this.sci_NumericRange__f_step), this.sci_NumericRange__f_end, this.sci_NumericRange__f_step, this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num)
    } else {
      const this$2 = this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num;
      const lhs$1 = this.sci_NumericRange__f_start;
      return new $c_sci_NumericRange$Exclusive(new $c_s_math_Integral$IntegralOps(this$2, lhs$1).$plus__O__O(this.sci_NumericRange__f_step), this.sci_NumericRange__f_end, this.sci_NumericRange__f_step, this.sci_NumericRange__f_scala$collection$immutable$NumericRange$$num)
    }
  };
  apply__I__O(idx) {
    if (((idx < 0) || (idx >= this.length__I()))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
    } else {
      return $p_sci_NumericRange__locationAfterN__I__O(this, idx)
    }
  };
  drop__I__sci_NumericRange(n) {
    return (((n <= 0) || (this.length__I() === 0)) ? this : ((n >= this.length__I()) ? $p_sci_NumericRange__newEmptyRange__O__sci_NumericRange$Exclusive(this, this.sci_NumericRange__f_end) : this.copy__O__O__O__sci_NumericRange($p_sci_NumericRange__locationAfterN__I__O(this, n), this.sci_NumericRange__f_end, this.sci_NumericRange__f_step)))
  };
  hashCode__I() {
    return (((((2 & this.sci_NumericRange__f_bitmap$0) << 24) >> 24) === 0) ? $p_sci_NumericRange__hashCode$lzycompute__I(this) : this.sci_NumericRange__f_hashCode)
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_NumericRange)) {
      const x2 = $as_sci_NumericRange(other);
      return (($f_sci_IndexedSeq__canEqual__O__Z(x2, this) && (this.length__I() === x2.length__I())) && ((this.length__I() === 0) || ($m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_NumericRange__f_start, x2.sci_NumericRange__f_start) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.last__O(), x2.last__O()))))
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  toString__T() {
    const empty = (this.isEmpty__Z() ? "empty " : "");
    const preposition = (this.sci_NumericRange__f_isInclusive ? "to" : "until");
    const stepped = ($m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_NumericRange__f_step, 1) ? "" : (" by " + this.sci_NumericRange__f_step));
    return (((((((empty + "NumericRange ") + this.sci_NumericRange__f_start) + " ") + preposition) + " ") + this.sci_NumericRange__f_end) + stepped)
  };
  className__T() {
    return "NumericRange"
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  drop__I__O(n) {
    return this.drop__I__sci_NumericRange(n)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  tail__O() {
    return this.tail__sci_NumericRange()
  };
}
function $as_sci_NumericRange(obj) {
  return (((obj instanceof $c_sci_NumericRange) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.NumericRange"))
}
function $isArrayOf_sci_NumericRange(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_NumericRange)))
}
function $asArrayOf_sci_NumericRange(obj, depth) {
  return (($isArrayOf_sci_NumericRange(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.NumericRange;", depth))
}
class $c_sci_ArraySeq {
}
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"))
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)))
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth))
}
class $c_sci_NumericRange$Exclusive extends $c_sci_NumericRange {
  constructor(start, end, step, num) {
    super();
    this.sci_NumericRange$Exclusive__f_num = null;
    this.sci_NumericRange$Exclusive__f_num = num;
    $ct_sci_NumericRange__O__O__O__Z__s_math_Integral__(this, start, end, step, false, num)
  };
  copy__O__O__O__sci_NumericRange$Exclusive(start, end, step) {
    $m_sci_NumericRange$();
    const num = this.sci_NumericRange$Exclusive__f_num;
    return new $c_sci_NumericRange$Exclusive(start, end, step, num)
  };
  copy__O__O__O__sci_NumericRange(start, end, step) {
    return this.copy__O__O__O__sci_NumericRange$Exclusive(start, end, step)
  };
}
const $d_sci_NumericRange$Exclusive = new $TypeData().initClass({
  sci_NumericRange$Exclusive: 0
}, false, "scala.collection.immutable.NumericRange$Exclusive", {
  sci_NumericRange$Exclusive: 1,
  sci_NumericRange: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_NumericRange$Exclusive.prototype.$classData = $d_sci_NumericRange$Exclusive;
class $c_sci_NumericRange$Inclusive extends $c_sci_NumericRange {
  constructor(start, end, step, num) {
    super();
    this.sci_NumericRange$Inclusive__f_num = null;
    this.sci_NumericRange$Inclusive__f_num = num;
    $ct_sci_NumericRange__O__O__O__Z__s_math_Integral__(this, start, end, step, true, num)
  };
  copy__O__O__O__sci_NumericRange$Inclusive(start, end, step) {
    $m_sci_NumericRange$();
    const num = this.sci_NumericRange$Inclusive__f_num;
    return new $c_sci_NumericRange$Inclusive(start, end, step, num)
  };
  copy__O__O__O__sci_NumericRange(start, end, step) {
    return this.copy__O__O__O__sci_NumericRange$Inclusive(start, end, step)
  };
}
const $d_sci_NumericRange$Inclusive = new $TypeData().initClass({
  sci_NumericRange$Inclusive: 0
}, false, "scala.collection.immutable.NumericRange$Inclusive", {
  sci_NumericRange$Inclusive: 1,
  sci_NumericRange: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_NumericRange$Inclusive.prototype.$classData = $d_sci_NumericRange$Inclusive;
class $c_scm_ArraySeq extends $c_scm_AbstractSeq {
  stringPrefix__T() {
    return "IndexedSeq"
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  fromSpecific__sc_IterableOnce__scm_ArraySeq(coll) {
    const evidence$1 = this.elemTag__s_reflect_ClassTag();
    let capacity = 0;
    let size = 0;
    let jsElems = null;
    const elementClass = evidence$1.runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    const isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    const s = coll.knownSize__I();
    const it = coll.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      const elem = it.next__O();
      const unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.jl_Class__f_data.zero : elem));
      jsElems.push(unboxedElem)
    };
    const $$x1 = $m_scm_ArraySeq$();
    const elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $$x1.make__O__scm_ArraySeq($makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), jsElems))
  };
  className__T() {
    return "ArraySeq"
  };
  equals__O__Z(other) {
    if ((other instanceof $c_scm_ArraySeq)) {
      const x2 = $as_scm_ArraySeq(other);
      if (($m_sr_ScalaRunTime$().array_length__O__I(this.array__O()) !== $m_sr_ScalaRunTime$().array_length__O__I(x2.array__O()))) {
        return false
      }
    };
    return $f_sc_Seq__equals__O__Z(this, other)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__scm_ArraySeq(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return this.fromSpecific__sc_IterableOnce__scm_ArraySeq(coll)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArraySeq$().scm_ArraySeq$__f_untagged
  };
}
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"))
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)))
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth))
}
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sci_List(a.tail__O());
        const temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  isDefinedAt__I__Z(x) {
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sci_List(these.tail__O())
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  exists__F1__Z(p) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ($uZ(p.apply__O__O(these.head__O()))) {
        return true
      };
      these = $as_sci_List(these.tail__O())
    };
    return false
  };
  contains__O__Z(elem) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), elem)) {
        return true
      };
      these = $as_sci_List(these.tail__O())
    };
    return false
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  isDefinedAt__O__Z(x) {
    const x$1 = $uI(x);
    return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
const $p_sci_Vector__checkRangeConvert__I__I = (function($thiz, index) {
  const idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + $thiz.sci_Vector__f_endIndex) | 0)) + ")"))
  }
});
const $p_sci_Vector__getElem__I__I__O = (function($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.sci_Vector__f_display0.get((31 & index))
  } else if ((xor < 1024)) {
    return $thiz.sci_Vector__f_display1.get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 32768)) {
    return $thiz.sci_Vector__f_display2.get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1048576)) {
    return $thiz.sci_Vector__f_display3.get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 33554432)) {
    return $thiz.sci_Vector__f_display4.get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $thiz.sci_Vector__f_display5.get((31 & ((index >>> 25) | 0))).get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__gotoPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__gotoFreshPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__shiftTopLevel__I__I__V = (function($thiz, oldLeft, newLeft) {
  const x1 = (((-1) + $thiz.sci_Vector__f_depth) | 0);
  switch (x1) {
    case 0: {
      const array = $thiz.sci_Vector__f_display0;
      $thiz.sci_Vector__f_display0 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array, oldLeft, newLeft);
      break
    }
    case 1: {
      const array$1 = $thiz.sci_Vector__f_display1;
      $thiz.sci_Vector__f_display1 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$1, oldLeft, newLeft), 2);
      break
    }
    case 2: {
      const array$2 = $thiz.sci_Vector__f_display2;
      $thiz.sci_Vector__f_display2 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$2, oldLeft, newLeft), 3);
      break
    }
    case 3: {
      const array$3 = $thiz.sci_Vector__f_display3;
      $thiz.sci_Vector__f_display3 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$3, oldLeft, newLeft), 4);
      break
    }
    case 4: {
      const array$4 = $thiz.sci_Vector__f_display4;
      $thiz.sci_Vector__f_display4 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$4, oldLeft, newLeft), 5);
      break
    }
    case 5: {
      const array$5 = $thiz.sci_Vector__f_display5;
      $thiz.sci_Vector__f_display5 = $asArrayOf_O($f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$5, oldLeft, newLeft), 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $p_sci_Vector__zeroLeft__AO__I__V = (function($thiz, array, index) {
  let i = 0;
  while ((i < index)) {
    array.set(i, null);
    i = ((1 + i) | 0)
  }
});
const $p_sci_Vector__copyRight__AO__I__AO = (function($thiz, array, left) {
  const copy = $asArrayOf_O(array.clone__O(), 1);
  $m_ju_Arrays$().fill__AO__I__I__O__V(copy, 0, left, null);
  return copy
});
const $p_sci_Vector__cleanLeftEdge__I__V = (function($thiz, cutIndex) {
  if ((cutIndex < 32)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex < 1024)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0)), 2)
  } else if ((cutIndex < 32768)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0)), 3)
  } else if ((cutIndex < 1048576)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0)), 4)
  } else if ((cutIndex < 33554432)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0)), 5)
  } else if ((cutIndex < 1073741824)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, (31 & ((cutIndex >>> 20) | 0))), 5);
    $thiz.sci_Vector__f_display5 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0)), 6)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__requiredDepth__I__I = (function($thiz, xor) {
  if ((xor < 32)) {
    return 1
  } else if ((xor < 1024)) {
    return 2
  } else if ((xor < 32768)) {
    return 3
  } else if ((xor < 1048576)) {
    return 4
  } else if ((xor < 33554432)) {
    return 5
  } else if ((xor < 1073741824)) {
    return 6
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__dropFront0__I__sci_Vector = (function($thiz, cutIndex) {
  const blockIndex = ((-32) & cutIndex);
  const xor = (cutIndex ^ (((-1) + $thiz.sci_Vector__f_endIndex) | 0));
  const d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  const shift = (cutIndex & (~(((-1) + (1 << $imul(5, d))) | 0)));
  const s = new $c_sci_Vector(((cutIndex - shift) | 0), (($thiz.sci_Vector__f_endIndex - shift) | 0), ((blockIndex - shift) | 0));
  const depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $f_sci_VectorPointer__preClean__I__V(s, d);
  $p_sci_Vector__cleanLeftEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor(startIndex, endIndex, focus) {
    super();
    this.sci_Vector__f_startIndex = 0;
    this.sci_Vector__f_endIndex = 0;
    this.sci_Vector__f_focus = 0;
    this.sci_Vector__f_dirty = false;
    this.sci_Vector__f_depth = 0;
    this.sci_Vector__f_display0 = null;
    this.sci_Vector__f_display1 = null;
    this.sci_Vector__f_display2 = null;
    this.sci_Vector__f_display3 = null;
    this.sci_Vector__f_display4 = null;
    this.sci_Vector__f_display5 = null;
    this.sci_Vector__f_startIndex = startIndex;
    this.sci_Vector__f_endIndex = endIndex;
    this.sci_Vector__f_focus = focus;
    this.sci_Vector__f_dirty = false
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  depth__I() {
    return this.sci_Vector__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_Vector__f_depth = x$1
  };
  display0__AO() {
    return this.sci_Vector__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_Vector__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_Vector__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_Vector__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_Vector__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_Vector__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_Vector__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_Vector__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_Vector__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_Vector__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_Vector__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_Vector__f_display5 = x$1
  };
  length__I() {
    return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
  };
  initIterator__sci_VectorIterator__V(s) {
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if (this.sci_Vector__f_dirty) {
      const index = this.sci_Vector__f_focus;
      $f_sci_VectorPointer__stabilize__I__V(s, index)
    };
    if ((s.sci_VectorIterator__f_depth > 1)) {
      const index$1 = this.sci_Vector__f_startIndex;
      const xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
    }
  };
  iterator__sc_Iterator() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      const s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
      this.initIterator__sci_VectorIterator__V(s);
      return s
    }
  };
  apply__I__O(index) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    return $p_sci_Vector__getElem__I__I__O(this, idx, (idx ^ this.sci_Vector__f_focus))
  };
  drop__I__sci_Vector(n) {
    if ((n <= 0)) {
      return this
    } else if ((this.sci_Vector__f_startIndex < ((this.sci_Vector__f_endIndex - n) | 0))) {
      return $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_startIndex + n) | 0))
    } else {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    }
  };
  head__O() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty.head")
    };
    return this.apply__I__O(0)
  };
  tail__sci_Vector() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
    };
    return this.drop__I__sci_Vector(1)
  };
  updateAt__I__O__sci_Vector(index, elem) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    const s = new $c_sci_Vector(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex, idx);
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    s.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
    $p_sci_Vector__gotoPosWritable__I__I__I__V(s, this.sci_Vector__f_focus, idx, (this.sci_Vector__f_focus ^ idx));
    s.sci_Vector__f_display0.set((31 & idx), elem);
    return s
  };
  appended__O__sci_Vector(value) {
    const thisLength = this.length__I();
    let result;
    if (((this.sci_Vector__f_depth === 1) && (thisLength < 32))) {
      const s = new $c_sci_Vector(0, ((1 + thisLength) | 0), 0);
      s.sci_Vector__f_depth = 1;
      const newDisplay0 = $newArrayObject($d_O.getArrayOf(), [((1 + thisLength) | 0)]);
      const src = this.sci_Vector__f_display0;
      const srcPos = this.sci_Vector__f_startIndex;
      $systemArraycopy(src, srcPos, newDisplay0, 0, thisLength);
      newDisplay0.set(thisLength, value);
      s.sci_Vector__f_display0 = newDisplay0;
      result = s
    } else if ((thisLength > 0)) {
      const blockIndex = ((-32) & this.sci_Vector__f_endIndex);
      const lo = (31 & this.sci_Vector__f_endIndex);
      if ((this.sci_Vector__f_endIndex !== blockIndex)) {
        const s$2 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
        const depth = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$2, this, depth);
        s$2.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoPosWritable__I__I__I__V(s$2, this.sci_Vector__f_focus, blockIndex, (this.sci_Vector__f_focus ^ blockIndex));
        s$2.sci_Vector__f_display0.set(lo, value);
        result = s$2
      } else {
        const shift = (this.sci_Vector__f_startIndex & (~(((-1) + (1 << $imul(5, (((-1) + this.sci_Vector__f_depth) | 0)))) | 0)));
        const shiftBlocks = ((this.sci_Vector__f_startIndex >>> $imul(5, (((-1) + this.sci_Vector__f_depth) | 0))) | 0);
        if ((shift !== 0)) {
          if ((this.sci_Vector__f_depth > 1)) {
            const newBlockIndex = ((blockIndex - shift) | 0);
            const newFocus = ((this.sci_Vector__f_focus - shift) | 0);
            const s$3 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex);
            const depth$1 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$3, this, depth$1);
            s$3.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$3, shiftBlocks, 0);
            $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$3, newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
            s$3.sci_Vector__f_display0.set(lo, value);
            result = s$3
          } else {
            const newBlockIndex$2 = (((-32) + blockIndex) | 0);
            const newFocus$2 = this.sci_Vector__f_focus;
            const s$4 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex$2);
            const depth$2 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$4, this, depth$2);
            s$4.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$4, shiftBlocks, 0);
            $p_sci_Vector__gotoPosWritable__I__I__I__V(s$4, newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
            if ((s$4.sci_Vector__f_display0.u.length < ((31 - shift) | 0))) {
              const newDisplay0$2 = $newArrayObject($d_O.getArrayOf(), [((31 - shift) | 0)]);
              const xs = s$4.sci_Vector__f_display0;
              $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs, newDisplay0$2, 0, 2147483647);
              s$4.sci_Vector__f_display0 = newDisplay0$2
            };
            s$4.sci_Vector__f_display0.set(((32 - shift) | 0), value);
            result = s$4
          }
        } else {
          const newFocus$3 = this.sci_Vector__f_focus;
          const s$5 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
          const depth$3 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$5, this, depth$3);
          s$5.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$5, newFocus$3, blockIndex, (newFocus$3 ^ blockIndex));
          s$5.sci_Vector__f_display0.set(lo, value);
          result = s$5
        }
      }
    } else {
      result = $m_sci_Vector$().scala$collection$immutable$Vector$$single__O__sci_Vector(value)
    };
    return result
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(o);
      return ((this === x2) || ((this.length__I() === x2.length__I()) && (((((((((this.sci_Vector__f_startIndex === x2.sci_Vector__f_startIndex) && (this.sci_Vector__f_endIndex === x2.sci_Vector__f_endIndex)) && (this.sci_Vector__f_display0 === x2.sci_Vector__f_display0)) && (this.sci_Vector__f_display1 === x2.sci_Vector__f_display1)) && (this.sci_Vector__f_display2 === x2.sci_Vector__f_display2)) && (this.sci_Vector__f_display3 === x2.sci_Vector__f_display3)) && (this.sci_Vector__f_display4 === x2.sci_Vector__f_display4)) && (this.sci_Vector__f_display5 === x2.sci_Vector__f_display5)) || $f_sc_Seq__equals__O__Z(this, o))))
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  className__T() {
    return "Vector"
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  drop__I__O(n) {
    return this.drop__I__sci_Vector(n)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
const $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_VectorPointer: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
class $c_scm_ArraySeq$ofBoolean extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofBoolean__f_array = null;
    this.scm_ArraySeq$ofBoolean__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofBoolean__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofBoolean__f_array;
    return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
      const x2 = $as_scm_ArraySeq$ofBoolean(that);
      const a = this.scm_ArraySeq$ofBoolean__f_array;
      const b = x2.scm_ArraySeq$ofBoolean__f_array;
      return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array)
  };
  apply$mcZI$sp__I__Z(index) {
    return this.scm_ArraySeq$ofBoolean__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcZI$sp__I__Z(index)
  };
  apply__I__O(i) {
    return this.apply$mcZI$sp__I__Z(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$BooleanManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofBoolean__f_array
  };
}
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"))
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)))
}
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth))
}
const $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass({
  scm_ArraySeq$ofBoolean: 0
}, false, "scala.collection.mutable.ArraySeq$ofBoolean", {
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofBoolean.prototype.$classData = $d_scm_ArraySeq$ofBoolean;
class $c_scm_ArraySeq$ofByte extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofByte__f_array = null;
    this.scm_ArraySeq$ofByte__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofByte__f_array.u.length
  };
  apply__I__B(index) {
    return this.scm_ArraySeq$ofByte__f_array.get(index)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofByte__f_array;
    return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofByte)) {
      const x2 = $as_scm_ArraySeq$ofByte(that);
      const a = this.scm_ArraySeq$ofByte__f_array;
      const b = x2.scm_ArraySeq$ofByte__f_array;
      return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__B($uI(v1))
  };
  apply__I__O(i) {
    return this.apply__I__B(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ByteManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofByte__f_array
  };
}
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"))
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)))
}
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth))
}
const $d_scm_ArraySeq$ofByte = new $TypeData().initClass({
  scm_ArraySeq$ofByte: 0
}, false, "scala.collection.mutable.ArraySeq$ofByte", {
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofByte.prototype.$classData = $d_scm_ArraySeq$ofByte;
class $c_scm_ArraySeq$ofChar extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofChar__f_array = null;
    this.scm_ArraySeq$ofChar__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofChar__f_array.u.length
  };
  apply__I__C(index) {
    return this.scm_ArraySeq$ofChar__f_array.get(index)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofChar__f_array;
    return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofChar)) {
      const x2 = $as_scm_ArraySeq$ofChar(that);
      const a = this.scm_ArraySeq$ofChar__f_array;
      const b = x2.scm_ArraySeq$ofChar__f_array;
      return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    const jsb = sb.scm_StringBuilder__f_underlying;
    if (($uI(start.length) !== 0)) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
    };
    const len = this.scm_ArraySeq$ofChar__f_array.u.length;
    if ((len !== 0)) {
      if ((sep === "")) {
        jsb.append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array)
      } else {
        jsb.length__I();
        $uI(end.length);
        $uI(sep.length);
        const c = this.scm_ArraySeq$ofChar__f_array.get(0);
        const str = $as_T(String.fromCharCode(c));
        jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
        let i = 1;
        while ((i < len)) {
          jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const c$1 = this.scm_ArraySeq$ofChar__f_array.get(i);
          const str$1 = $as_T(String.fromCharCode(c$1));
          jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
          i = ((1 + i) | 0)
        }
      }
    };
    if (($uI(end.length) !== 0)) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
    };
    return sb
  };
  apply__O__O(v1) {
    return $bC(this.apply__I__C($uI(v1)))
  };
  apply__I__O(i) {
    return $bC(this.apply__I__C(i))
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$CharManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofChar__f_array
  };
}
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
const $d_scm_ArraySeq$ofChar = new $TypeData().initClass({
  scm_ArraySeq$ofChar: 0
}, false, "scala.collection.mutable.ArraySeq$ofChar", {
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofChar.prototype.$classData = $d_scm_ArraySeq$ofChar;
class $c_scm_ArraySeq$ofDouble extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofDouble__f_array = null;
    this.scm_ArraySeq$ofDouble__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofDouble__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofDouble__f_array;
    return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
      const x2 = $as_scm_ArraySeq$ofDouble(that);
      const a = this.scm_ArraySeq$ofDouble__f_array;
      const b = x2.scm_ArraySeq$ofDouble__f_array;
      return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array)
  };
  apply$mcDI$sp__I__D(index) {
    return this.scm_ArraySeq$ofDouble__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcDI$sp__I__D(index)
  };
  apply__I__O(i) {
    return this.apply$mcDI$sp__I__D(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$DoubleManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofDouble__f_array
  };
}
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"))
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)))
}
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth))
}
const $d_scm_ArraySeq$ofDouble = new $TypeData().initClass({
  scm_ArraySeq$ofDouble: 0
}, false, "scala.collection.mutable.ArraySeq$ofDouble", {
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofDouble.prototype.$classData = $d_scm_ArraySeq$ofDouble;
class $c_scm_ArraySeq$ofFloat extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofFloat__f_array = null;
    this.scm_ArraySeq$ofFloat__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofFloat__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofFloat__f_array;
    return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
      const x2 = $as_scm_ArraySeq$ofFloat(that);
      const a = this.scm_ArraySeq$ofFloat__f_array;
      const b = x2.scm_ArraySeq$ofFloat__f_array;
      return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array)
  };
  apply$mcFI$sp__I__F(index) {
    return this.scm_ArraySeq$ofFloat__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcFI$sp__I__F(index)
  };
  apply__I__O(i) {
    return this.apply$mcFI$sp__I__F(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$FloatManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofFloat__f_array
  };
}
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"))
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)))
}
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth))
}
const $d_scm_ArraySeq$ofFloat = new $TypeData().initClass({
  scm_ArraySeq$ofFloat: 0
}, false, "scala.collection.mutable.ArraySeq$ofFloat", {
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofFloat.prototype.$classData = $d_scm_ArraySeq$ofFloat;
class $c_scm_ArraySeq$ofInt extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofInt__f_array = null;
    this.scm_ArraySeq$ofInt__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofInt__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofInt__f_array;
    return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofInt)) {
      const x2 = $as_scm_ArraySeq$ofInt(that);
      const a = this.scm_ArraySeq$ofInt__f_array;
      const b = x2.scm_ArraySeq$ofInt__f_array;
      return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array)
  };
  apply$mcII$sp__I__I(index) {
    return this.scm_ArraySeq$ofInt__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcII$sp__I__I(index)
  };
  apply__I__O(i) {
    return this.apply$mcII$sp__I__I(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$IntManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofInt__f_array
  };
}
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"))
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)))
}
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth))
}
const $d_scm_ArraySeq$ofInt = new $TypeData().initClass({
  scm_ArraySeq$ofInt: 0
}, false, "scala.collection.mutable.ArraySeq$ofInt", {
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofInt.prototype.$classData = $d_scm_ArraySeq$ofInt;
class $c_scm_ArraySeq$ofLong extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofLong__f_array = null;
    this.scm_ArraySeq$ofLong__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofLong__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofLong__f_array;
    return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofLong)) {
      const x2 = $as_scm_ArraySeq$ofLong(that);
      const a = this.scm_ArraySeq$ofLong__f_array;
      const b = x2.scm_ArraySeq$ofLong__f_array;
      return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array)
  };
  apply$mcJI$sp__I__J(index) {
    return this.scm_ArraySeq$ofLong__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.apply$mcJI$sp__I__J(index)
  };
  apply__I__O(i) {
    return this.apply$mcJI$sp__I__J(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$LongManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofLong__f_array
  };
}
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"))
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)))
}
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth))
}
const $d_scm_ArraySeq$ofLong = new $TypeData().initClass({
  scm_ArraySeq$ofLong: 0
}, false, "scala.collection.mutable.ArraySeq$ofLong", {
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofLong.prototype.$classData = $d_scm_ArraySeq$ofLong;
const $p_scm_ArraySeq$ofRef__elemTag$lzycompute__s_reflect_ClassTag = (function($thiz) {
  if ((!$thiz.scm_ArraySeq$ofRef__f_bitmap$0)) {
    const $$x1 = $m_s_reflect_ClassTag$();
    const this$1 = $thiz.scm_ArraySeq$ofRef__f_array;
    $thiz.scm_ArraySeq$ofRef__f_elemTag = $$x1.apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$1).getComponentType__jl_Class());
    $thiz.scm_ArraySeq$ofRef__f_bitmap$0 = true
  };
  return $thiz.scm_ArraySeq$ofRef__f_elemTag
});
class $c_scm_ArraySeq$ofRef extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofRef__f_elemTag = null;
    this.scm_ArraySeq$ofRef__f_array = null;
    this.scm_ArraySeq$ofRef__f_bitmap$0 = false;
    this.scm_ArraySeq$ofRef__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return ((!this.scm_ArraySeq$ofRef__f_bitmap$0) ? $p_scm_ArraySeq$ofRef__elemTag$lzycompute__s_reflect_ClassTag(this) : this.scm_ArraySeq$ofRef__f_elemTag)
  };
  length__I() {
    return this.scm_ArraySeq$ofRef__f_array.u.length
  };
  apply__I__O(index) {
    return this.scm_ArraySeq$ofRef__f_array.get(index)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofRef__f_array;
    return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofRef)) {
      const x2 = $as_scm_ArraySeq$ofRef(that);
      return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, x2.scm_ArraySeq$ofRef__f_array)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  array__O() {
    return this.scm_ArraySeq$ofRef__f_array
  };
}
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"))
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)))
}
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth))
}
const $d_scm_ArraySeq$ofRef = new $TypeData().initClass({
  scm_ArraySeq$ofRef: 0
}, false, "scala.collection.mutable.ArraySeq$ofRef", {
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofRef.prototype.$classData = $d_scm_ArraySeq$ofRef;
class $c_scm_ArraySeq$ofShort extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofShort__f_array = null;
    this.scm_ArraySeq$ofShort__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofShort__f_array.u.length
  };
  apply__I__S(index) {
    return this.scm_ArraySeq$ofShort__f_array.get(index)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofShort__f_array;
    return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofShort)) {
      const x2 = $as_scm_ArraySeq$ofShort(that);
      const a = this.scm_ArraySeq$ofShort__f_array;
      const b = x2.scm_ArraySeq$ofShort__f_array;
      return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__S($uI(v1))
  };
  apply__I__O(i) {
    return this.apply__I__S(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ShortManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofShort__f_array
  };
}
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"))
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)))
}
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth))
}
const $d_scm_ArraySeq$ofShort = new $TypeData().initClass({
  scm_ArraySeq$ofShort: 0
}, false, "scala.collection.mutable.ArraySeq$ofShort", {
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofShort.prototype.$classData = $d_scm_ArraySeq$ofShort;
class $c_scm_ArraySeq$ofUnit extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofUnit__f_array = null;
    this.scm_ArraySeq$ofUnit__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofUnit__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofUnit__f_array;
    return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
      const x2 = $as_scm_ArraySeq$ofUnit(that);
      return (this.scm_ArraySeq$ofUnit__f_array.u.length === x2.scm_ArraySeq$ofUnit__f_array.u.length)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array)
  };
  apply$mcVI$sp__I__V(index) {
    this.scm_ArraySeq$ofUnit__f_array.get(index)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    this.apply$mcVI$sp__I__V(index)
  };
  apply__I__O(i) {
    this.apply$mcVI$sp__I__V(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$UnitManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofUnit__f_array
  };
}
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"))
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)))
}
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth))
}
const $d_scm_ArraySeq$ofUnit = new $TypeData().initClass({
  scm_ArraySeq$ofUnit: 0
}, false, "scala.collection.mutable.ArraySeq$ofUnit", {
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofUnit.prototype.$classData = $d_scm_ArraySeq$ofUnit;
class $c_scm_HashMap {
}
function $as_scm_HashMap(obj) {
  return (((obj instanceof $c_scm_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"))
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth))
}
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(xs);
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = $as_scm_ArraySeq$ofChar(xs);
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.scm_ArraySeq$ofChar__f_array)
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = $as_scm_StringBuilder(xs);
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = $as_T(String.fromCharCode(c));
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $as_scm_StringBuilder(obj) {
  return (((obj instanceof $c_scm_StringBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.StringBuilder"))
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
function $asArrayOf_scm_StringBuilder(obj, depth) {
  return (($isArrayOf_scm_StringBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.get(n)
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.set(index, elem)
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = $as_scm_ArrayBuffer(elems);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const srcLen = this.scm_ArrayBuffer__f_size0;
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied)
    };
    return copied
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ArrayBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  knownSize__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
updateReceivingForm = (function() {
  $m_Ldummy$().updateReceivingForm__V()
});
updateDispatchingForm = (function() {
  $m_Ldummy$().updateDispatchingForm__V()
});
populateReceivingFormOnLoad = (function(arg) {
  const prep0 = $uI(arg);
  $m_Ldummy$().populateReceivingFormOnLoad__I__V(prep0)
});
addNewRowToItemsList = (function() {
  return $m_Ldummy$().addNewRowToItemsList__Lorg_scalajs_dom_raw_Node()
});
propagatePersonArticleSelection = (function(arg, arg$2) {
  const prep0 = $as_T(arg);
  const prep1 = $as_T(arg$2);
  $m_Ldummy$().propagatePersonArticleSelection__T__T__V(prep0, prep1)
});
removeRowFromItemsList = (function(arg) {
  const prep0 = $uI(arg);
  $m_Ldummy$().removeRowFromItemsList__I__V(prep0)
});
submitDispatchingForm = (function() {
  $m_Ldummy$().submitDispatchingForm__V()
});
updateSummary = (function() {
  $m_Ldummy$().updateSummary__V()
});
populateDispatchingTable = (function(arg) {
  const prep0 = $as_Ldummy$DispatchingForm(arg);
  $m_Ldummy$().populateDispatchingTable__Ldummy$DispatchingForm__V(prep0)
});
fetchDispatchingForm = (function() {
  $m_Ldummy$().fetchDispatchingForm__V()
});
submitReceivingForm = (function() {
  $m_Ldummy$().submitReceivingForm__V()
});
fetchPeople = (function() {
  $m_Ldummy$().fetchPeople__V()
});
fetchReceivingForm = (function() {
  $m_Ldummy$().fetchReceivingForm__V()
});
deleteReceivingForm = (function() {
  $m_Ldummy$().deleteReceivingForm__V()
});
populateDispatchingFormOnLoad = (function(arg) {
  const prep0 = $uI(arg);
  $m_Ldummy$().populateDispatchingFormOnLoad__I__V(prep0)
});
$s_Ldummy__main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=receive-dispatch-view-fastopt.js.map