class DiscoveryBoxesController < ApplicationController
  before_action :check_logged_in

  def index
    @boxes = current_user.discovery_boxes
  end

  def new
    @box = current_user.discovery_boxes.build
  end

  def create
    @box = current_user.discovery_boxes.build(discovery_box_params)

    if @box.save
      flash[:notice] = "Discovery box created successfully"
      redirect_to @box
    else
      flash[:alert] = "There was an issue creating your discovery box"
      render "new"
    end
  end

  def edit
    @box = DiscoveryBox.find(params[:id])
  end

  def show
    @box = DiscoveryBox.find(params[:id])

    if @box.nil?
      flash[:alert] = "Discovery box not found"
      redirect_to discovery_box_index_path
    end
  end

  private

  def discovery_box_params
    params.require(:discovery_box).permit(:title)
  end

  # ensure that the user is logged in before performing any
  # discovery box action
  def check_logged_in
    unless current_user
      flash[:alert] = "You must be logged in to create a discovery box"
      redirect_to root_path
    end
  end
end
