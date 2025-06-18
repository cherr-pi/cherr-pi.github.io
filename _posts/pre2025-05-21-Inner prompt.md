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
프롬프트 페이지 테스트중입니다. 이 포스트에서는 여러 텍스트의 색상과 마크다운을 표시합니다. &#123;% raw %&#125; 와 같은 이스케이프부터, >를 통해 tip 프롬프트를 사용하는 테스트도 함께 진행합니다. `인라인 코드` 출력도 테스트하며, tip 프롬프트의 여러 타입도 제작하여 테스트합니다.
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
```liquid
테스트중입니다. 코드블럭의 디자인 수정과 함께 글꼴도 수정하기 위한 테스트입니다. 가로 스크롤 없이 줄 바꿈이 되어야 합니다. 테스트를 위한 프롬프트는 다음과 같습니다 :

{{#if {{? {{getglobalvar::toggle_util}}=1 }} }}
## Data Collection
- Draw the primary data from # Previous Exchanges to understand the current context behind the given data, considering its relevance, connections, and correlation to existing context.

## Data Research
- Infer NPCs' background, experiences, traits, characteristics, and other elements from # References by researching various primary sources to ensure a comprehensive context and diverse information.

## Data Analysis
- Analyze NPCs' cognition, perceptions, judgment, motivations, preferences, tendencies, and other attributes, considering plausibility and reasonability of data, to apply them to their speech style, behavior patterns, way of thinking, and other characteristics.
{{/if}}
```
{% endraw %}
<br><br><br>
<div style="text-align: right;"><em>Inner Prompt</em></div>
