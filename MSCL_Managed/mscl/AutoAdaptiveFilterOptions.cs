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

public class AutoAdaptiveFilterOptions : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal AutoAdaptiveFilterOptions(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(AutoAdaptiveFilterOptions obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~AutoAdaptiveFilterOptions() {
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
          msclPINVOKE.delete_AutoAdaptiveFilterOptions(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public AutoAdaptiveFilterOptions() : this(msclPINVOKE.new_AutoAdaptiveFilterOptions__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public AutoAdaptiveFilterOptions(InertialTypes.AutoAdaptiveFilteringLevel lvl, ushort limit) : this(msclPINVOKE.new_AutoAdaptiveFilterOptions__SWIG_1((int)lvl, limit), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public InertialTypes.AutoAdaptiveFilteringLevel level {
    set {
      msclPINVOKE.AutoAdaptiveFilterOptions_level_set(swigCPtr, (int)value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      InertialTypes.AutoAdaptiveFilteringLevel ret = (InertialTypes.AutoAdaptiveFilteringLevel)msclPINVOKE.AutoAdaptiveFilterOptions_level_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public ushort timeLimit {
    set {
      msclPINVOKE.AutoAdaptiveFilterOptions_timeLimit_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      ushort ret = msclPINVOKE.AutoAdaptiveFilterOptions_timeLimit_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

}

}
