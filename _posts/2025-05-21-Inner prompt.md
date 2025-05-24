---
title: Inner Prompt
author: jerr
date: 2025-05-21 11:30:00 +0900
categories: [Prompt]
tags: [Inner]
description: None
pin: true
---
## Overview
프롬프트 정리 페이지 테스트중입니다. 이 포스트에서는 여러 텍스트의 색상과 마크다운을 표시합니다. &#123;% raw %&#125; 와 같은 이스케이프부터, >를 통해 tip 프롬프트를 사용하는 테스트도 함께 진행합니다. `인라인 코드`도 테스트하며, tip 프롬프트의 여러 타입을 제작해 볼 것입니다.
<br>

## Prompt-tip
> tip 테스트
{: .prompt-tip }

> info 테스트
{: .prompt-info }

> danger 테스트
{: .prompt-danger }

> warning 테스트
{: .prompt-warning }

> pr 테스트
{: .prompt-pr }

## Code
{% raw %}
```
테스트중입니다. 코드블럭의 디자인 수정과 함께 글꼴도 수정하기 위한 테스트입니다. 줄 바꿈이 일어나는 경우 가로 스크롤 없이도 확인할 수 있어야 합니다. 테스트를 위한 프롬프트는 다음과 같습니다 :

{{#if {{getglobalvar::toggle_genre}} }}
## Genre
- {{getglobalvar::toggle_genre0}}
{{/if}}
```
{% endraw %}
{% raw %}
```prom
테스트중입니다. 단순 텍스트가 아닌 문법을 적용하는 텍스트의 색상 조절을 위함입니다.
{{#if {{getglobalvar::toggle_genre}} }}
## Genre
- {{getglobalvar::toggle_genre0}}
{{/if}}
```
{% endraw %}
<br><br><br>
<div style="text-align: right;"><em>Inner Prompt</em></div>
