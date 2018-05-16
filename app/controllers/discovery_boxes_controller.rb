class DiscoveryBoxesController < ApplicationController
  before_action :check_logged_in
  before_action :correct_user, only: [:show, :edit, :update, :destroy]

  def index
    @boxes = current_user.discovery_boxes
  end

  def new
    @box = current_user.discovery_boxes.build
    @perfumes = Perfume.all
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
  end

  def show
    if @box.nil?
      flash[:alert] = "Discovery box not found"
      redirect_to discovery_box_index_path
    end
  end

  def update
    if @box.update(post_params)
      flash[:notice] = "Discovery box updated successfully"
      redirect_to @box
    else
      flash[:alert] = "There was an error updating your discovery box"
      render 'edit'
    end
  end

  def destroy
    @box.destroy
    flash[:notice] = "Discovery box deleted successfully"
    redirect_to discovery_box_path
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

  # ensure the current user is equal to the user
  def correct_user
    @box = DiscoveryBox.find(params[:id])
    unless @box.user == current_user
      flash[:alert] = "You can only access your own discovery boxes"
      redirect_to root_path
    end
  end
end
