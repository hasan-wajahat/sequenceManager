class PublishHistoriesController < ApplicationController
  before_action :set_publish_history, only: [:show, :update, :destroy]
  before_filter :authenticate_request!

  # GET /publish_histories
  def index
    @publish_histories = Short.find(params[:short_id]).publish_histories

    render json: @publish_histories
  end

  # GET /publish_histories/1
  def show
    render json: @publish_history
  end

  # POST /publish_histories
  def create
    @publish_history = PublishHistory.new(publish_history_params)

    if @publish_history.save
      render json: [status: :created], status: :created, location: @publish_history
    else
      render json: @publish_history.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /publish_histories/1
  def update
    if @publish_history.update(publish_history_params)
      render json: @publish_history
    else
      render json: @publish_history.errors, status: :unprocessable_entity
    end
  end

  # DELETE /publish_histories/1
  def destroy
    @publish_history.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_publish_history
    @publish_history = PublishHistory.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def publish_history_params
    params.require(:publish_history).permit(:tasktype, :publisher, :image, :comment, :id, :short_id)
  end
end
