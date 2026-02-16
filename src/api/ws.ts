let socket: WebSocket | null = null;
let reconnectTimeout: NodeJS.Timeout | null = null;

export function connectWS(onEvent: (data: any) => void) {
  // Clear any existing reconnect timeout
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
    reconnectTimeout = null;
  }

  // Close existing socket if any
  if (socket) {
    socket.close();
  }

  console.log('🔌 Connecting WebSocket to ws://localhost:8000/ws');
  socket = new WebSocket("ws://localhost:8000/ws");
  
  socket.onopen = () => {
    console.log('✅ WebSocket connected');
  };
  
  socket.onmessage = (e) => {
    console.log('📨 WebSocket raw message:', e.data);
    try {
      const data = JSON.parse(e.data);
      console.log('📨 WebSocket parsed data:', data);
      onEvent(data);
    } catch (error) {
      console.error('❌ Failed to parse WebSocket message:', error);
    }
  };
  
  socket.onerror = (error) => {
    console.error('❌ WebSocket error:', error);
    // Don't trigger OUT_OF_SERVICE on error, let onclose handle it
  };
  
  socket.onclose = (event) => {
    console.log('🔌 WebSocket disconnected, code:', event.code, 'reason:', event.reason);
    socket = null;
    
    // Auto-reconnect after 3 seconds
    console.log('🔄 Reconnecting in 3 seconds...');
    reconnectTimeout = setTimeout(() => {
      connectWS(onEvent);
    }, 3000);
  };
}

export function disconnectWS() {
  console.log('🛑 Manually disconnecting WebSocket');
  
  // Clear reconnect timeout
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
    reconnectTimeout = null;
  }
  
  socket?.close();
  socket = null;
}
