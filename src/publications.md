---
hide:
  - toc
disable_comments: true
---

# Publications

A list of all the publications in which I have been involved is provided below.

{% for publication in publications() -%}
- **{{ publication.title }}** [:fontawesome-regular-file-pdf:]({{ publication.pdf_url }}) 

    published in *{{ publication.journal }}* ({{ publication.date }})

    {{ publication.author_list }}

    DOI: [{{ publication.doi }}]({{ publication.doi_url }})


{% endfor %}

