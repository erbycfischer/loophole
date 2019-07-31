class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken
        protect_from_forgery unless: -> { request.format.json? }
        skip_before_action :verify_authenticity_token
end
