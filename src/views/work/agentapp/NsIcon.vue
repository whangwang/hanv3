<script>
import { h } from 'vue'

export default {
  name: 'NsIcon',
  props: {
    name: { type: String, required: true },
    size: { type: Number, default: 18 },
    color: { type: String, default: '#131A34' },
    stroke: { type: Number, default: 1.6 },
  },
  render() {
    const c = this.color
    const sw = this.stroke
    const path = (d, opts = {}) => h('path', {
      d, stroke: c, 'stroke-width': sw,
      fill: opts.fill || 'none',
      'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    })
    const circle = (cx, cy, r, fill) => h('circle', {
      cx, cy, r,
      fill: fill ? c : 'none',
      stroke: fill ? 'none' : c,
      'stroke-width': sw,
    })
    const rect = (x, y, w, ht, rx) => h('rect', {
      x, y, width: w, height: ht, rx,
      fill: 'none', stroke: c, 'stroke-width': sw,
    })

    let inner
    switch (this.name) {
      case 'back':   inner = [path('M14 5l-6 7 6 7')]; break
      case 'close':  inner = [path('M5 5l14 14M19 5L5 19')]; break
      case 'chevR':  inner = [path('M9 5l7 7-7 7')]; break
      case 'chevD':  inner = [path('M5 9l7 7 7-7')]; break
      case 'search': inner = [circle(10, 10, 6), path('M19 19l-4-4')]; break
      case 'bell':   inner = [path('M5 16l-1 2h16l-1-2v-5a7 7 0 0 0-14 0v5zm5 4a2 2 0 0 0 4 0')]; break
      case 'pin':    inner = [path('M9 3h6l-1 5 4 3-9 0 4-3z'), path('M12 11v8')]; break
      case 'plus':   inner = [path('M12 5v14M5 12h14')]; break
      case 'more':   inner = [circle(6, 12, 1.4, true), circle(12, 12, 1.4, true), circle(18, 12, 1.4, true)]; break
      case 'filter': inner = [path('M4 7h16M7 12h10M10 17h4')]; break
      case 'home':   inner = [path('M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z')]; break
      case 'user':   inner = [circle(12, 8, 4), path('M4 20a8 8 0 0 1 16 0')]; break
      case 'doc':    inner = [path('M7 3h8l4 4v14H7zM15 3v4h4')]; break
      case 'inbox':  inner = [path('M4 13l3-8h10l3 8v6H4zM4 13h5l1 2h4l1-2h5')]; break
      case 'coin':   inner = [circle(12, 12, 8), path('M10 9h3a2 2 0 1 1 0 4h-3v3M10 13h5')]; break
      case 'shield': inner = [path('M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z')]; break
      case 'cal':    inner = [rect(4, 6, 16, 14, 2), path('M4 10h16M9 4v4M15 4v4')]; break
      case 'phone':  inner = [path('M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z')]; break
      case 'radar':  inner = [circle(12, 12, 9), circle(12, 12, 5), circle(12, 12, 1.5, true), path('M12 12L18 6')]; break
      case 'flag':   inner = [path('M5 3v18'), path('M5 4h12l-2 4 2 4H5')]; break
      case 'dot':    inner = [circle(12, 12, 3, true)]; break
      case 'notif':  inner = [path('M5 17l1-1V11a6 6 0 0 1 12 0v5l1 1H5z M10 20a2 2 0 0 0 4 0')]; break
      default:       inner = []
    }
    return h('svg', { viewBox: '0 0 24 24', width: this.size, height: this.size }, inner)
  },
}
</script>
