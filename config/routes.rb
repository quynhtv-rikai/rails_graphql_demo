Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: "graphql#excute"
  end
  post "/graphql", to: "graphql#execute"
end
