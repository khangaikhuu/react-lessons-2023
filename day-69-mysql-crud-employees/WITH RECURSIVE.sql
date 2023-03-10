WITH RECURSIVE cte as (
        SELECT
            id,
            id nextid,
            title,
            parent_id
        FROM menus t1
        UNION ALL
        SELECT
            cte.id,
            t1.id,
            t1.title,
            t1.parent_id
        FROM menus t1
            JOIN cte ON cte.parent_id = t1.id
    )
SELECT
    Id,
    title,
    nextid parentId
FROM cte
WHERE parent_id IS NULL