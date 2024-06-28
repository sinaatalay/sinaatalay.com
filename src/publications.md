---
hide:
  - toc
disable_comments: true
---



<span>
$$
V_\text{in}-R_ti_t-L_t\dot{i}_t-\omega
$$
</span>


{ #eq-testmotor }

$$
\begin{equation}
(R+R_l)i_l-L_l\dot{i}_l-\omega K_\text{V,l}=0
\end{equation}
$$

# Publications

{% for publication in publications() -%}
- **{{ publication.title }}** [:fontawesome-regular-file-pdf:]({{ publication.pdf_url }}) 

    published in *{{ publication.journal }}* ({{ publication.date }})

    {{ publication.author_list }}

    DOI: [{{ publication.doi }}]({{ publication.doi_url }})


{% endfor %}

