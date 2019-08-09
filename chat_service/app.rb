require 'em-websocket'

PORT = 8080
EM.run do
    puts "WebSocket server running on port: #{PORT}"
  EM::WebSocket.run(:host => "0.0.0.0", :port => PORT) do |ws|
    ws.onopen do |handshake|
      puts "WebSocket connection open"

      # Access properties on the EM::WebSocket::Handshake object, e.g.
      # path, query_string, origin, headers

      # Publish message to the client
      ws.send "Hello Client, you connected to #{handshake.path}"
    end

    ws.onclose do 
        puts "Connection closed" 
    end

    ws.onmessage do |msg|
      puts "Recieved message: #{msg}"
      ws.send "Pong: #{msg}"
    end
  end
end