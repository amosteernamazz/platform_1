clear;clc;
for i=1:30
a=[rand,rand,rand];
bar([1 2 3],a);
saveas(gcf,sprintf('E:/Software/PHPnow-1.5.6/htdocs/platformAir/pythonOutput/1/my_plot'),'png');
a=[rand,rand,rand];
bar([1 2 3],a);
saveas(gcf,sprintf('E:/Software/PHPnow-1.5.6/htdocs/platformAir/pythonOutput/1/my_plot2'),'png');
a=[rand,rand,rand];
bar([1 2 3],a);
saveas(gcf,sprintf('E:/Software/PHPnow-1.5.6/htdocs/platformAir/pythonOutput/1/my_plot3'),'png');
end