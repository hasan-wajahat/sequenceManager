class AuthenticationController < ApplicationController
  def authenticate_user
    user = User.find_for_database_authentication(email: params[:email])
    if user
      if user.valid_password?(params[:password])
        render json: payload(user)
      else
        render json: {errors: ['Invalid Username/Password'], status: false}
      end
    else
      render json:{errors: ['User does not exist'], status: false}
    end

  end

  private

  def payload(user)
    return nil unless user and user.id
    {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        status: true
    }
  end
end