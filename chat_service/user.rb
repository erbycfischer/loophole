class User
    attr_reader :sock

    def initialize(socket)
        @sock = socket
    end

    def onopen(handshake)
        puts "WebSocket connection open"
      
        # Access properties on the EM::WebSocket::Handshake object, e.g.
        # path, query_string, origin, headers
      
        # Publish message to the client
        @sock.send "Hello Client, you connected to #{handshake.path}"
    end  

    def onclose
        puts "Connection closed" 
    end

    def onmessage(msg)
        puts "Recieved message: #{msg}\n\tfrom client: #{@sock}"
        @sock.send "Echo: #{msg}"
    end
end