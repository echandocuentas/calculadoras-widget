# Calculadoras laborales gratis para tu web (España 2026)

Calculadoras de **sueldo neto**, **indemnización por despido** y **paro** que puedes insertar gratis en cualquier web con un copia y pega. Las mantiene [Echando Cuentas](https://echandocuentas.com/) y se actualizan solas cuando cambia la normativa (IRPF, Seguridad Social, topes del SEPE).

- **Gratis** y sin registro.
- **Sin cookies ni seguimiento** de tus visitantes, sin anuncios.
- **Se adaptan** al ancho de tu página y ajustan su altura solas.
- **Resultados comprobados** con los simuladores oficiales del CGPJ, el SEPE y la Seguridad Social ([metodología](https://echandocuentas.com/metodologia/#verificacion)).

**Demo en vivo:** https://echandocuentas.github.io/calculadoras-widget/

## Cómo insertarla

1. Elige la calculadora.
2. Copia el código de la carpeta [`ejemplos/`](ejemplos/) (o de [echandocuentas.com/widget/](https://echandocuentas.com/widget/)).
3. Pégalo en tu página como bloque HTML. En WordPress: bloque «HTML personalizado».

### Sueldo neto 2026

De bruto a neto con la retención oficial de IRPF y la cotización a la Seguridad Social, en 12 o 14 pagas.

```html
<div class="echandocuentas-widget"><iframe src="https://echandocuentas.com/widget/sueldo-neto/" title="Calculadora de sueldo neto 2026" loading="lazy" style="width:100%;max-width:520px;height:470px;border:0"></iframe><p style="font:13px/1.4 sans-serif;margin:6px 0 0">Calculadora gratuita de <a href="https://echandocuentas.com/">Echando Cuentas</a></p></div>
<script src="https://echandocuentas.com/widget.js" async></script>
```

### Indemnización por despido

Despido improcedente, objetivo o fin de contrato, con el tramo anterior a 2012 y los topes legales.

```html
<div class="echandocuentas-widget"><iframe src="https://echandocuentas.com/widget/despido/" title="Calculadora de indemnización por despido" loading="lazy" style="width:100%;max-width:520px;height:480px;border:0"></iframe><p style="font:13px/1.4 sans-serif;margin:6px 0 0">Calculadora gratuita de <a href="https://echandocuentas.com/">Echando Cuentas</a></p></div>
<script src="https://echandocuentas.com/widget.js" async></script>
```

### Paro 2026

Cuánto paro corresponde y durante cuánto tiempo, con los topes oficiales de 2026.

```html
<div class="echandocuentas-widget"><iframe src="https://echandocuentas.com/widget/paro/" title="Calculadora de paro 2026" loading="lazy" style="width:100%;max-width:520px;height:440px;border:0"></iframe><p style="font:13px/1.4 sans-serif;margin:6px 0 0">Calculadora gratuita de <a href="https://echandocuentas.com/">Echando Cuentas</a></p></div>
<script src="https://echandocuentas.com/widget.js" async></script>
```

## Preguntas frecuentes

**¿Cuánto cuesta?** Nada.

**¿Se actualizan solas?** Sí. El cálculo se sirve desde echandocuentas.com, así que cuando cambian las cifras (por ejemplo, en enero) tu página queda al día sin tocar nada.

**¿Recogéis datos de mis visitantes?** No. Las calculadoras insertadas no usan cookies, analítica ni anuncios.

**¿Puedo quitar el enlace?** Te pedimos que mantengas la línea «Calculadora gratuita de Echando Cuentas»: es lo que nos permite mantenerlas gratis.

**¿Necesitas otra calculadora o tus colores?** Escríbenos a hola@echandocuentas.com o abre un *issue* en este repositorio.

## Otras calculadoras gratuitas

[Finiquito](https://echandocuentas.com/calculadora-finiquito/) · [Sueldo a jornada parcial](https://echandocuentas.com/calculadora-sueldo-jornada-parcial/) · [Cuota de autónomos 2026](https://echandocuentas.com/cuota-autonomos-2026/) · [Factura de autónomo con IVA e IRPF](https://echandocuentas.com/calculadora-factura-autonomo/) · [Vacaciones](https://echandocuentas.com/calculadora-vacaciones/) · [Embargo de nómina](https://echandocuentas.com/calculadora-embargo-nomina/) · [Prestación por nacimiento](https://echandocuentas.com/calculadora-prestacion-nacimiento/) · [Días hábiles](https://echandocuentas.com/calculadora-dias-habiles/) · [Calendario laboral 2027](https://echandocuentas.com/calendario-laboral-2027/)

---

**English:** free, embeddable Spanish salary (net pay), severance and unemployment-benefit calculators for websites about work in Spain. Copy the snippet, paste it as an HTML block. No cookies, no ads.

Código de inserción bajo licencia MIT. Las calculadoras y sus contenidos © Echando Cuentas.
