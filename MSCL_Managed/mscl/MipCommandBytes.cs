//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class MipCommandBytes : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal MipCommandBytes(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(MipCommandBytes obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~MipCommandBytes() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_MipCommandBytes(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public MipTypes.Command id {
    set {
      msclPINVOKE.MipCommandBytes_id_set(swigCPtr, (int)value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      MipTypes.Command ret = (MipTypes.Command)msclPINVOKE.MipCommandBytes_id_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public BytesCollection commands {
    set {
      msclPINVOKE.MipCommandBytes_commands_set(swigCPtr, BytesCollection.getCPtr(value));
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipCommandBytes_commands_get(swigCPtr);
      BytesCollection ret = (cPtr == global::System.IntPtr.Zero) ? null : new BytesCollection(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public bool responseSuccess {
    set {
      msclPINVOKE.MipCommandBytes_responseSuccess_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      bool ret = msclPINVOKE.MipCommandBytes_responseSuccess_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public MipCommandBytes() : this(msclPINVOKE.new_MipCommandBytes__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipCommandBytes(MipTypes.Command _id) : this(msclPINVOKE.new_MipCommandBytes__SWIG_1((int)_id), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipCommandBytes(MipTypes.Command _id, Bytes _cmd) : this(msclPINVOKE.new_MipCommandBytes__SWIG_2((int)_id, Bytes.getCPtr(_cmd)), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipCommandBytes(MipTypes.Command _id, BytesCollection _cmds) : this(msclPINVOKE.new_MipCommandBytes__SWIG_3((int)_id, BytesCollection.getCPtr(_cmds)), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void add(Bytes cmd) {
    msclPINVOKE.MipCommandBytes_add(swigCPtr, Bytes.getCPtr(cmd));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

}

}