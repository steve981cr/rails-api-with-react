desc 'Start development servers'
namespace :start do
  exec 'foreman start -f Procfile.dev'
end
