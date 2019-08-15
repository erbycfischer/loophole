class User
    attr_reader :sock

    def initialize(socket)
        @sock = socket
        @nick = ""
        @count = 0
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
        #Write nick
        if @count == 0
            @nick = msg
            @count += 1
        else 
            puts "Recieved message: #{msg}\n\tfrom client: #{@sock}\n\tnickname: #{@nick}"
            @sock.send "#{@nick}: #{msg}"
        end
    end
end