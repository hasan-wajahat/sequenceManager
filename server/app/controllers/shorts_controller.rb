class ShortsController < ApplicationController
  before_action :set_short, only: [:show, :update, :destroy]

  # GET /shorts
  def index
    @shorts = Short.all

    render json: @shorts
  end

  # GET /shorts/1
  def show
    render json: @short
  end

  # POST /shorts
  def create
    @short = Short.new(short_params)

    if @short.save
      render json: @short, status: :created, location: @short
    else
      render json: @short.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shorts/1
  def update
    if @short.update(short_params)
      render json: @short
    else
      render json: @short.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shorts/1
  def destroy
    @short.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_short
      @short = Short.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def short_params
      params.require(:short).permit(:sequenceSequence, :seq, :shotID, :shotName)
    end
end
