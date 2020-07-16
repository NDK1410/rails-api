module Api::V1
  class PostsController < ApplicationController
  	before_action :find_post, except: [:index, :create]

    def index
      @posts = Post.all
      render json: @posts, status: :ok
    end

    def show
      render json: @post, status: :ok
    end

    def update
      @post.update post_params
    end

    def create
      Post.create post_params
    end

    private

      def find_post
      	@post = Post.find_by params: id
      end

      def post_params
      	params.require(:post).permit(:title, :content)
      end
  end
end