# _plugins/rouge_prom.rb

module Rouge
  module Lexers
    class prom < RegexLexer
      title "prom"
      desc "Custom template engine with slot::, equal::, etc"
      tag 'prom'
      filenames '*.mtpl'

      state :root do
        rule %r/{{#if\s+.*?}}/, Keyword::Reserved
        rule %r/{{\/if}}/, Keyword::Reserved
        rule %r/{{#each\s+.*?}}/, Keyword::Reserved
        rule %r/{{\/each}}/, Keyword::Reserved
        rule %r/{{slot::\w+}}/, Name::Variable
        rule %r/{{char}}/, Name::Variable
        rule %r/{{equal::.*?::.*?}}/, Operator
        rule %r/".*?"/, Str
        rule %r/\s+/, Text
        rule %r/.+?/, Text
      end
    end
  end
end
