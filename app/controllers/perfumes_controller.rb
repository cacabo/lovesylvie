class PerfumesController < ApplicationController
  # Ensure that an admin is logged in
  before_action :correct_admin, only: [:new, :edit, :update, :destroy, :index]

  # View all perfumes
  def index
    @perfumes = Perfume.all
  end

  # Render form to create a new perfume
  def new
    @perfume = Perfume.new
  end

  # Create a new perfume
  def create
    @perfume = Perfume.new(perfume_params)

    if @perfume.save
      flash[:notice] = "Perfume created successfully"
      redirect_to perfumes_path
    else
      flash[:alert] = "There was an issue creating the perfume"
      render "new"
    end
  end

  # View form to edit a perfume
  def edit
    @perfume = Perfume.find(params[:id])
  end

  # Update a perfume's information
  def update
    @perfume = Perfume.find(params[:id])

    if @perfume.update(perfume_params)
      flash[:notice] = "Perfume updated successfully"
      redirect_to perfumes_path
    else
      flash[:alert] = "There was an error updating the perfume"
      render 'edit'
    end
  end

  # Delete a perfume
  def destroy
    @perfume = Perfume.find(params[:id])
    @perfume.destroy
    flash[:notice] = "Perfume deleted successfully"
    redirect_to perfumes_path
  end

  private

  # Allow only certain parameters
  def perfume_params
    params.require(:perfume).permit(:name, :characteristics, :body, :image)
  end

  # Only an admin can access routes relating to perfumes
  def correct_admin
    unless current_user and current_user.isAdmin
      flash[:alert] = "Admin access only"
      redirect_to(root_url)
    end
  end
end
