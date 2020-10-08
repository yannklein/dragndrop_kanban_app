Rails.application.routes.draw do
  resources :kanbans
  patch '/kanbans/:id/sort', to: 'kanbans#sort', as: "kanban_sort"
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
