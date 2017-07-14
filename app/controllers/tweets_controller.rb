class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if request.xhr?
      respond_to do |format|
        format.html do
          if @tweet.save
            render partial: 'tweet', locals: {tweet: @tweet} 
          else
            # Address errors
          end
          end
        end
  else
      @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to tweets_path
    else
      render :index
    end
  end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end


# if request.xhr?
#       respond_to do |format|
#         format.html do
#           if @greeting.save
#             render partial: 'greeting', locals: {greeting: @greeting}
#           else
#             # Address errors
#           end
#         end
#         format.json do
#           if @greeting.save
#             render json: @greeting
#           else
#             # Address errors
#           end
#         end
#       end
#     else
#       @greeting = Greeting.new(greeting_params)
#       if @greeting.save
#         redirect_to greetings_path
#       else
#         @greetings = Greeting.all.order(created_at: :desc)
#         render :index
#         # Add some error handling
#       end
#     end
