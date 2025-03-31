// callController.js
const CallStatus = {
  QUEUED: 'queued',
  CONNECTING: 'connecting',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};

class CallController {
  constructor() {
    this.calls = new Map();
    this.nextCallId = 1;
  }

  createCall(requestData) {
    const callId = `call_${this.nextCallId++}`;
    
    const call = {
      id: callId,
      from: requestData.from,
      to: requestData.to,
      status: CallStatus.QUEUED,
      startTime: null,
      endTime: null,
      duration: 0,
      recording: null,
      notes: requestData.notes || '',
      createdAt: new Date(),
      metadata: requestData.metadata || {}
    };
    
    this.calls.set(callId, call);
    return call;
  }

  getCall(callId) {
    return this.calls.get(callId);
  }

  getAllCalls() {
    return Array.from(this.calls.values());
  }

  updateCallStatus(callId, status) {
    const call = this.calls.get(callId);
    if (!call) {
      throw new Error(`Call with ID ${callId} not found`);
    }
    
    call.status = status;
    
    if (status === CallStatus.IN_PROGRESS && !call.startTime) {
      call.startTime = new Date();
    } else if ((status === CallStatus.COMPLETED || status === CallStatus.FAILED || status === CallStatus.CANCELLED) && call.startTime && !call.endTime) {
      call.endTime = new Date();
      call.duration = (call.endTime - call.startTime) / 1000; // duration in seconds
    }
    
    return call;
  }

  addCallNote(callId, note) {
    const call = this.calls.get(callId);
    if (!call) {
      throw new Error(`Call with ID ${callId} not found`);
    }
    
    call.notes += note ? `\n${note}` : '';
    return call;
  }

  setCallRecording(callId, recordingUrl) {
    const call = this.calls.get(callId);
    if (!call) {
      throw new Error(`Call with ID ${callId} not found`);
    }
    
    call.recording = recordingUrl;
    return call;
  }

  updateCallMetadata(callId, metadata) {
    const call = this.calls.get(callId);
    if (!call) {
      throw new Error(`Call with ID ${callId} not found`);
    }
    
    call.metadata = { ...call.metadata, ...metadata };
    return call;
  }
}

module.exports = {
  CallController,
  CallStatus
};
