require 'erb'
require 'json'

# これらを変更してください．
@title = "KUEE13"
@description = "このサイトは，京都大学電気電子工学科の過去問サイトです．過去問の投稿，ご意見などは kuee.exam[at]gmail.com に送ってください．([at]は@に変更してください)"

@result = JSON.parse(File.read("result.json"));
`rm dest/*.html`

def generate(parent)
  folders = @result["folder"].select{|f| f["parent"] == parent}
  files = @result["file"].select{|f| f["parent"] == parent}.sort{|f,g| g["name"] <=> f["name"]}
  contents = File.read("template.erb")
  erb = ERB.new(contents,nil,'<>')
  name = parent == @result["root"] ? "index" : parent
  File.write("dest/" + name + ".html", erb.result(binding))
  folders.each do |f|
    generate(f["fileId"])
  end
end

parent = @result['root']
generate(parent)
