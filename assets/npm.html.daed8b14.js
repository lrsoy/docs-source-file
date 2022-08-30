import{_ as o,o as i,c as p,a as s,d as e,e as t,b as n,r as l}from"./app.dca2af53.js";const r={},c=t(`<h1 id="\u53D1\u5E03npm\u5305" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03npm\u5305" aria-hidden="true">#</a> \u53D1\u5E03npm\u5305</h1><h2 id="\u5173\u4E8E" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E" aria-hidden="true">#</a> \u5173\u4E8E</h2><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u521D\u59CB\u5316\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u9879\u76EE\uFF0C\u9009\u7528\u7ECF\u5E38\u4F7F\u7528\u7684\u5DE5\u5177\u5373\u53EF\uFF0C<strong>yarn</strong>\uFF0C<strong>pnpm</strong>\uFF0C<strong>npm</strong>\u7B49\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm init <span class="token operator">-</span>y <span class="token operator">||</span> yarn init <span class="token comment">// \u76F4\u63A5\u5B8C\u6210\uFF0C\u8DF3\u8FC7\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u57FA\u672C\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784 <strong>package.json</strong></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-cs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u540D\u79F0</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u7248\u672C</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u62A5\u7684\u63CF\u8FF0</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u70B9</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lrsoy &lt;\u90AE\u7BB1&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u4F5C\u8005</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA4\u8BC1</span>
  <span class="token comment">/* \u5173\u4E8E github \u4ED3\u5E93 */</span>
  <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F6F\u4EF6\u5305\u4E3B\u9875</span>
  <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6B64\u5C5E\u6027\u6307\u5B9A\u4E86\u6B64\u7A0B\u5E8F\u5305\u4ED3\u5E93\u6240\u5728\u7684\u4F4D\u7F6E</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git+https://github.com/lrsoy/parse-markdown-file.git&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;issues&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F6F\u4EF6\u5305\u7684\u95EE\u9898\u94FE\u63A5\u5730\u5740</span>
  <span class="token comment">/* \u5173\u4E8E\u5305\u7684\u5165\u53E3\u6587\u4EF6 */</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.mjs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u8F6F\u4EF6\u5305\u7684\u5165\u53E3\u70B9</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=n("\u76EE\u5F55\u7ED3\u6784"),u=s("br",null,null,-1),m={href:"https://www.toptal.com/developers/gitignore",target:"_blank",rel:"noopener noreferrer"},v=n(".gitignore\u81EA\u5B9A\u4E49\u751F\u6210\u4EC0\u4E48\u6837\u7684\u5FFD\u7565\u6587\u4EF6"),h=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>hello<span class="token operator">-</span>npm
<span class="token operator">|</span><span class="token comment">-- dist/\uFF08 \u5B58\u653E\u6253\u5305\u540E\u7684\u6587\u4EF6,\u65E0\u9700\u8BBE\u7F6E\uFF0C\u901A\u8FC7\u6253\u5305\u751F\u6210 \uFF09</span>
<span class="token operator">|</span><span class="token comment">-- src/\uFF08 \u6E90\u7801 \uFF09</span>
<span class="token operator">|</span><span class="token comment">-- test/ ( \u6D4B\u8BD5\u6587\u4EF6 )</span>
<span class="token operator">|</span><span class="token comment">-- package.json</span>
<span class="token operator">|</span><span class="token comment">-- build.config.ts ( unbuild\u6253\u5305\u914D\u7F6E\u6587\u4EF6 )</span>
<span class="token operator">|</span><span class="token comment">-- .npmrc ( \u914D\u7F6Enpm\u6E90 )</span>
<span class="token operator">|</span><span class="token comment">-- .gitignore ( \u5FFD\u7565\u6587\u4EF6\u914D\u7F6E )</span>
<span class="token operator">|</span><span class="token comment">-- README.md</span>
<span class="token operator">|</span><span class="token comment">-- tsconfig.json (\u5982\u679C\u53EF\u4EE5\uFF0C\u63A8\u8350\u4F7F\u7528ts\u8FDB\u884C\u5305\u7684\u5F00\u53D1\uFF0C\u5982\u4E0D\u9700\u8981ts\u5219\u65E0\u9700\u6B64\u914D\u7F6E\u6587\u4EF6)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><h2 id="degit\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#degit\u5DE5\u5177" aria-hidden="true">#</a> Degit\u5DE5\u5177</h2><h2 id="\u652F\u6301\u591A\u79CD\u65B9\u5F0F\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u591A\u79CD\u65B9\u5F0F\u4E0B\u8F7D" aria-hidden="true">#</a> \u652F\u6301\u591A\u79CD\u65B9\u5F0F\u4E0B\u8F7D</h2><h2 id="\u6253\u5305\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u9009\u62E9" aria-hidden="true">#</a> \u6253\u5305\u9009\u62E9</h2><h2 id="\u8D26\u53F7\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8D26\u53F7\u767B\u5F55" aria-hidden="true">#</a> \u8D26\u53F7\u767B\u5F55 \u270D\uFE0F</h2>`,6),k=n("\u8981\u60F3\u53D1\u5E03\u81EA\u5DF1\u5F00\u53D1\u597D\u7684\u5305\uFF0C\u6700\u91CD\u8981\u7684\u5C31\u662F\u9700\u8981\u6CE8\u518C\u4E00\u4E2Anpm\u7684\u8D26\u53F7\u3002"),g=s("br",null,null,-1),b={href:"https://www.npmjs.com/signup",target:"_blank",rel:"noopener noreferrer"},q=n("npm"),_=n("\u3002"),y=s("br",null,null,-1),j={href:"https://docs.npmjs.com/cli/v8/commands",target:"_blank",rel:"noopener noreferrer"},f=n("npm \u6307\u4EE4"),x=t(`<p><img src="https://img.shields.io/badge/vscode-v1.56.2-blue" alt="vscode"><br><img src="https://img.shields.io/badge/nodejs-v16.17.0-blue" alt="nodejs"><br><img src="https://img.shields.io/badge/npm-v8.15.0-blue" alt="npm"></p><ol><li>\u6307\u5B9A\u670D\u52A1\u5668</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm adduser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u767B\u5F55\uFF0C\u8F93\u5165\u6307\u4EE4 <strong>npm login</strong> \u540E\u63D0\u793A\u4E00\u4E0B\u4FE1\u606F\uFF0C\u6839\u636E\u4EE5\u4E0B\u9009\u9879\u8FDB\u884C\u586B\u5199\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528\u7684\u662F\u4F60\u7684 npm \u7684\u7528\u6237\u540D</span>
<span class="token literal-property property">Username</span><span class="token operator">:</span> \u7528\u6237\u540D 

 <span class="token comment">// \u4F7F\u7528\u7684\u662F\u4F60\u7684 npm \u767B\u5F55\u79D8\u5BC6</span>
<span class="token literal-property property">Password</span><span class="token operator">:</span> \u5BC6\u7801

<span class="token comment">// \u586B\u5199\u90AE\u7BB1\u4FE1\u606F\uFF0C\u586B\u5199\u540E npm \u4F1A\u5411\u4F60\u53D1\u9001\u90AE\u4EF6\uFF0C\u590D\u5236\u90AE\u4EF6\u7684\u9A8C\u8BC1\u7801\uFF0C\u586B\u5230\u4E0B\u9762\u9009\u9879\u91CC</span>
<span class="token literal-property property">Email</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token constant">IS</span> <span class="token keyword">public</span><span class="token punctuation">)</span><span class="token operator">:</span> \u90AE\u7BB1 

<span class="token comment">// \u586B\u5199\u90AE\u7BB1\u4E2D\u63A5\u6536\u5230\u7684 8\u4F4D\u9A8C\u8BC1\u7801 \u4F8B\u5982\uFF1A60175662</span>
Enter one<span class="token operator">-</span>time password<span class="token operator">:</span> \u9A8C\u8BC1\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u9000\u51FA\u5F53\u524D\u767B\u5F55\u8D26\u53F7</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm logout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u67E5\u770B\u5F53\u524D\u767B\u5F55\u8005</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm who am i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u5C06\u5F00\u53D1\u5B8C\u6210\u7684\u5305\u63A8\u9001\u5230npm\u670D\u52A1\u5668\u4E0A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function w(E,I){const a=l("ExternalLinkIcon");return i(),p("div",null,[c,s("ul",null,[s("li",null,[d,u,s("a",m,[v,e(a)])])]),h,s("p",null,[k,g,s("a",b,[q,e(a)]),_,y,s("a",j,[f,e(a)])]),x])}var V=o(r,[["render",w],["__file","npm.html.vue"]]);export{V as default};