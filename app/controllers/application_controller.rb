class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        unless logged_in?
            redirect_to new_api_session_url
        end
    end

    def logged_in?
        !!current_user
    end

    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def log_in(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end
end
