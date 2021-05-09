FROM nginx
RUN mkdir -p /var/www/quote.local
COPY ./static /var/www/quote.local
RUN rm /etc/nginx/conf.d/default.conf
COPY quote.local.conf /etc/nginx/conf.d/quote.local.conf
RUN mkdir -p /etc/ssl
COPY server.crt /etc/ssl
COPY server.key /etc/ssl