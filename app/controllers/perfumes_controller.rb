class PerfumesController < ApplicationController
  before_action :correct_admin, only: [:new, :edit, :update, :destroy, :index]

  def index
    @perfumes = Perfume.all
  end

  def new
    @perfume = Perfume.new
  end

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

  def edit
    @perfume = Perfume.find(params[:id])
  end

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

  def destroy
    @perfume = Perfume.find(params[:id])
    @perfume.destroy
    flash[:notice] = "Perfume deleted successfully"
    redirect_to perfumes_path
  end

  private

  def perfume_params
    params.require(:perfume).permit(:name, :characteristics, :body)
  end

  def correct_admin
    unless current_user and current_user.isAdmin
      flash[:alert] = "Admin access only"
      redirect_to(root_url)
    end
  end
end
