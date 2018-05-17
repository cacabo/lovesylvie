class DiscoveryBoxesController < ApplicationController
  before_action :check_logged_in
  before_action :correct_user, only: [:show, :add_perfume, :edit, :update, :destroy]

  def index
    # Find the current user's discovery box
    box = current_user.discovery_box

    # Check if the box exists or not
    if box.nil?
      box = current_user.discovery_box.build
      if box.save
      else
      end
    else
      # If the user has a box, redirect to it
      redirect_to box
    end
  end

  def show
    @box = current_user.discovery_box
    @perfumes = Perfume.all
  end

  def new
    @box = current_user.discovery_boxes.build
  end

  def create
    @box = current_user.discovery_box.build(discovery_box_params)

    if @box.save
      flash[:notice] = "Discovery box created successfully"
      redirect_to @box
    else
      flash[:alert] = "There was an issue creating your discovery box"
      render "new"
    end
  end

  def add_perfume
    # Find the perfume with the passed in ID
    perfume = Perfume.find(params[:perfume_id])

    # If the perfume was deleted / the request was improper
    if (perfume.nil?)
      flash[:alert] = "Perfume not found"
      redirect_to discovery_box_path
      return
    end

    # Isolate the current user's discovery box
    box = current_user.discovery_box

    # Check if the relationship is already in place or if the box is full
    if box.perfumes.length >= 5
      flash[:alert] = "Your box is already full"
      redirect_to box
    elsif box.perfumes.exists?(perfume.id)
      flash[:alert] = "That perfume is alread in your box"
      redirect_to box
    else
      # Create the needed relationship
      box.box_perfume_relationships.build(perfume: perfume, discovery_box: box)

      # Attempt to save
      if box.save
        flash[:notice] = "Added perfume successfully"
        redirect_to box
      else
        flash[:alert] = "There was an issue adding the perfume"
        redirect_to box
      end
    end
  end

  def edit
    # TODO?
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
