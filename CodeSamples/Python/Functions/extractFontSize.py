import sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable

font = TTFont(sys.argv[1])
cmap = font['cmap']
t = cmap.getcmap(3,1).cmap
s = font.getGlyphSet()
units_per_em = font['head'].unitsPerEm

def getTextWidth(text,pointSize):
    total = 0
    for c in text:
        if ord(c) in t and t[ord(c)] in s:
            total += s[t[ord(c)]].width
        else:
            total += s['.notdef'].width
    total = total*float(pointSize)/units_per_em
    return total

text = 'This is a test'

width = getTextWidth(text,12)/len(text)

print('Text: "%s"' % text)
print('Width in points: %f' % width)
print('Width in inches: %f' % (width/72))
print('Width in cm: %f' % (width*2.54/72))
print('Width in WP Units: %f' % (width*1200/72))
print('Width in px: %f'%((width/72)*96))