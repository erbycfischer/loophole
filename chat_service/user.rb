class User
    attr_reader :sock

    def initialize(socket)
        @sock = socket
    end

    @sock.onopen do | handshake |
        puts "WebSocket connection open"
      
        # Access properties on the EM::WebSocket::Handshake object, e.g.
        # path, query_string, origin, headers
      
        # Publish message to the client
        ws.send "Hello Client, you connected to #{handshake.path}"
    end  

    @sock.onclose do 
        puts "Connection closed" 
    end

    @sock.onmessage do |msg|
        puts "Recieved message: #{msg}"
        ws.send "Pong: #{msg}"
    end
end