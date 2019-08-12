class Room
    attr_reader :user_one, :user_two

    def initialize(user_one, user_two)
        @user_one = user_one
        @user_two = user_two
    end

    def broadcast(message)
        @user_one.send message
        @user_two.send message
    end
end