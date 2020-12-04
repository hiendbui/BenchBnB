class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user 
            log_in(@user)
            render json: @user
        else
            render json: ['Invalid Username or Password'], status: 401
        end
        
    end

    def destroy 
        if logged_in? 
            log_out 
            render json: {}
        else
            render json: ["No user signed in"], status: 404
        end
    end

end
