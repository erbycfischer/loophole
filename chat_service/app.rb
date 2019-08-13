require 'em-websocket'

require './user'
require './rooms'

PORT = 8080
$users = Hash.new

EM.run do
  puts "WebSocket server running on port: #{PORT}"
  EM::WebSocket.run(:host => "0.0.0.0", :port => PORT) do |ws|
    ws.onopen do |handshake|
      @user = User.new(ws)
      $users[ws] = @user
      @user.onopen(handshake)

      ws.onmessage do |msg|
        @user.onmessage(msg)
      end
  
      ws.onclose do
        @user.onclose()
      end
    end
  end
end