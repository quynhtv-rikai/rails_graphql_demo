# README

## stacks
- ruby on rails
- graphql
- reactJS
- apollo react client

## setup
```
~ cd rails_graphql_demo
# install gem
~ bundle install
# migrate data
~ rails db:create && rails db:migrate && rails db:seed
```
## local test
```
~ cd rails_graphql_demo
~ rails s 
# BE will start at port 3000

# open new terminal tab
~ cd rails_graphql_demo/frontend
~ yarn start 
# FE will start at port 3001
```
=> App run at: `http://localhost:3001`

Play around with graphql: `http://localhost:3000/graphiql`
## TODO
- create users
- show selected user
- update css